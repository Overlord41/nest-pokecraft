import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://pokemondb_user:mj0tzEiGprvS3lUm@pokemoncluster.hmtu2dh.mongodb.net/nest-pokemon',
    ),
    PokemonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
