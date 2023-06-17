import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;
  async executeSeed() {
    const pokePromises = [];
    for (let i = 1; i <= 3; i++) {
      pokePromises.push(i);
    }
    const newPromises = pokePromises.map((el) =>
      this.axios.get<PokeResponse>(`https://pokeapi.co/api/v2/pokemon/${el}`),
    );

    const infoPokemons = await Promise.allSettled(newPromises);

    const pokefilter = infoPokemons.filter(
      (result) => result.status === 'fulfilled',
    );

    const selectedPokes = pokefilter.map((elem) => {
      if (elem.status === 'fulfilled') {
        return {
          no: elem.value.data.id,
          namePokemon: elem.value.data.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${elem.value.data.id}.png`,
          types: elem.value.data.types.map((el) => el.type.name),
          generation: this.pokeEvolution(+elem.value.data.id),
        };
      }
    });

    return selectedPokes;
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
