import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  page?: number;

  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  limit?: number;

  @IsOptional()
  @IsString()
  @MinLength(3)
  order?: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  type?: string;

  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  generation?: number;
}
