import {
  IsArray,
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  Min,
  MinLength,
} from 'class-validator';
import {
  EvolutionInterface,
  PokemonFilesInterface,
} from '../interfaces/PokemonModel.interface';

export class CreatePokemonDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;

  @IsUrl()
  image: string;

  @IsArray()
  types: string[];

  @IsArray()
  @IsOptional()
  evolutions?: EvolutionInterface[];

  @IsArray()
  @IsOptional()
  files?: PokemonFilesInterface[];
}
