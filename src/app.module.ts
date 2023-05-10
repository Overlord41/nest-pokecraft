import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://pokemondb_user:mj0tzEiGprvS3lUm@pokemoncluster.hmtu2dh.mongodb.net/nest-pokemon',
    ),
    PokemonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
