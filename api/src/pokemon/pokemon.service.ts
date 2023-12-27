import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { PaginationDto } from '../common/dto/pagination.dto';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase();
    try {
      const pokemon = await this.pokemonModel.create(createPokemonDto);
      return pokemon;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const {
      page = 1,
      limit = 10,
      order = 'asc',
      type,
      generation,
    } = paginationDto;
    const skip = (page - 1) * limit;
    const sortNew = order === 'asc' ? 1 : -1;
    const query = this.pokemonModel.find();
    const countQuery = this.pokemonModel.find();

    if (type) {
      // Agregar filtro por tipo si se proporciona un tipo para el filtrado
      query.where('types').in([type]);
      countQuery.where('types').in([type]);
    }

    if (generation) {
      // Agregar filtro por generación si se proporciona una generación
      query.where('generation').equals(generation);
      countQuery.where('generation').equals(generation);
    }

    // Cantidad de pokemon aplicando los filtros de type y generation
    const totalResults = await countQuery.countDocuments().exec();

    //Cantidad total de páginas
    const totalPages = Math.ceil(totalResults / limit);

    const listPokemons = await query
      .skip(skip)
      .limit(limit)
      .sort({ no: sortNew })
      .select('_id no name image generation types')
      .exec();

    return {
      data: listPokemons,
      totalPages,
    };
  }

  async findOne(term: string) {
    let pokemon: Pokemon;

    // Si es un número
    if (!isNaN(+term)) {
      pokemon = await this.pokemonModel.findOne({ no: term });
    }
    // Si es un mongoId
    if (!pokemon && isValidObjectId(term)) {
      pokemon = await this.pokemonModel.findById(term);
    }
    // Si es un nombre
    if (!pokemon) {
      pokemon = await this.pokemonModel.findOne({
        name: term.toLocaleLowerCase().trim(),
      });
    }

    if (!pokemon)
      throw new NotFoundException(
        `Pokemon with id, name or no "${term}" not found`,
      );

    return pokemon;
  }

  async update(term: string, updatePokemonDto: UpdatePokemonDto) {
    const pokemon = await this.findOne(term);
    if (updatePokemonDto.name)
      updatePokemonDto.name = updatePokemonDto.name.toLocaleLowerCase();
    try {
      await pokemon.updateOne(updatePokemonDto);
      return { ...pokemon.toJSON(), ...updatePokemonDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.pokemonModel.deleteOne({ _id: id });
    if (deletedCount === 0)
      throw new BadRequestException(`Pokemon with id "${id}" not found`);
    return;
  }

  private handleExceptions(error) {
    if (error.code === 11000)
      throw new BadRequestException(
        `Pokemon exist in db ${JSON.stringify(error.keyValue)}`,
      );
    console.log(error);
    throw new InternalServerErrorException(
      `Can't create pokemon - Check server logs`,
    );
  }
}
