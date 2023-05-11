import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    // }),
    // MongooseModule.forRoot(process.env.MONGODB),
    PokemonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
