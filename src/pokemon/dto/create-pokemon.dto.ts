import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class EvolutionDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;

  @IsString()
  @MinLength(3)
  name: string;

  @IsUrl()
  image: string;
}

export class FilesPokemonDto {
  @IsUrl()
  image: string;

  @IsInt()
  @IsPositive()
  @Min(1)
  pages: number;

  @IsBoolean()
  pdo: boolean;

  @IsArray()
  @IsString({ each: true })
  links: string[];
}

export class CreatePokemonDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;

  @IsString()
  @MinLength(3)
  name: string;

  @IsUrl()
  image: string;

  @IsInt()
  @IsPositive()
  @Min(1)
  generation: number;

  @IsArray()
  @IsString({ each: true })
  types: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EvolutionDto)
  evolutions?: EvolutionDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FilesPokemonDto)
  files?: FilesPokemonDto[];
}
