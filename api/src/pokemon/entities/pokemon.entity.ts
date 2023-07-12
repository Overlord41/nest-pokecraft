import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class EvolutionPokemon {
  @Prop({ required: true })
  no: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  image: string;
}

class FilesPokemon {
  @Prop({ required: true })
  image: string;

  @Prop({ required: true, default: 0 })
  pages: number;

  @Prop({ required: true, default: false })
  pdo: boolean;

  @Prop({ type: [String], required: true })
  links: string[];
}

@Schema()
export class Pokemon extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  no: number;

  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    unique: true,
  })
  image: string;

  @Prop({ required: true })
  generation: number;

  @Prop({ type: [String], required: true })
  types: string[];

  @Prop({ required: false })
  evolutions: EvolutionPokemon[];

  @Prop({ required: false })
  files: FilesPokemon[];
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
