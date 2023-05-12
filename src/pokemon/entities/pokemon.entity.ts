import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  EvolutionInterface,
  PokemonFilesInterface,
} from '../interfaces/PokemonModel.interface';

@Schema()
export class Pokemon extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  no: number;

  @Prop({
    unique: true,
    index: true,
  })
  image: string;

  types: string[];
  evolutions?: EvolutionInterface[];
  files?: PokemonFilesInterface[];
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
