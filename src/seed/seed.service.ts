import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,

    private readonly http: AxiosAdapter,
  ) {}
  async executeSeed() {
    await this.pokemonModel.deleteMany();
    const pokePromises: number[] = [];
    for (let i = 1; i <= 10; i++) {
      pokePromises.push(i);
    }
    const newPromises = pokePromises.map((el) =>
      this.http.get<PokeResponse>(`https://pokeapi.co/api/v2/pokemon/${el}`),
    );

    const infoPokemons = await Promise.allSettled(newPromises);

    const pokefilter = infoPokemons.filter(
      (result) => result.status === 'fulfilled',
    );

    const selectedPokes = pokefilter.map((elem) => {
      if (elem.status === 'fulfilled') {
        return {
          no: elem.value.id,
          name: elem.value.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${elem.value.id}.png`,
          types: elem.value.types.map((el) => el.type.name),
          generation: this.pokeEvolution(+elem.value.id),
        };
      }
    });

    try {
      await this.pokemonModel.insertMany(selectedPokes);
      return `Seed executed successfully`;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(`Error - Check logs`);
    }
  }

  pokeEvolution(num: number) {
    if (num > 0 && num <= 151) return 1;
    if (num > 151 && num <= 251) return 2;
    if (num > 251 && num <= 386) return 3;
    if (num > 386 && num <= 493) return 4;
    if (num > 493 && num <= 649) return 5;
    if (num > 649 && num <= 721) return 6;
    if (num > 721 && num <= 809) return 7;
    if (num > 809 && num <= 905) return 8;
    if (num > 905 && num <= 1010) return 9;
    return 15;
  }
}
