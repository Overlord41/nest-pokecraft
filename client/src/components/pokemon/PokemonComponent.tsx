import { appUseSelector } from '../../redux/store'
import React from 'react'
// import { useSearchParams } from 'react-router-dom'
import { CardPokemon } from './cardPokemon/CardPokemon'
import { FilterPokemon } from './FilterPokemon'

export const PokemonComponent: React.FC = () => {
  // const [searchParams, setSearchParams] = useSearchParams()
  // console.log(searchParams.get('page'))
  // console.log(setSearchParams)

  // const listPokemons = [
  //   {
  //     _id: '65304576376d8d0612dbb928',
  //     no: 1,
  //     name: 'bulbasaur',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  //     generation: 1,
  //     source: '',
  //     types: ['grass', 'poison'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb929',
  //     no: 2,
  //     name: 'ivysaur',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
  //     generation: 1,
  //     source: '',
  //     types: ['grass', 'poison'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb92a',
  //     no: 3,
  //     name: 'venusaur',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
  //     generation: 1,
  //     source: '',
  //     types: ['grass', 'poison'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb92b',
  //     no: 4,
  //     name: 'charmander',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
  //     generation: 1,
  //     source: '',
  //     types: ['fire'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb92c',
  //     no: 5,
  //     name: 'charmeleon',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
  //     generation: 1,
  //     source: '',
  //     types: ['fire'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb92d',
  //     no: 6,
  //     name: 'charizard',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
  //     generation: 1,
  //     source: '',
  //     types: ['fire', 'flying'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb92e',
  //     no: 7,
  //     name: 'squirtle',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
  //     generation: 1,
  //     source: '',
  //     types: ['water'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb92f',
  //     no: 8,
  //     name: 'wartortle',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
  //     generation: 1,
  //     source: '',
  //     types: ['water'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb930',
  //     no: 9,
  //     name: 'blastoise',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
  //     generation: 1,
  //     source: '',
  //     types: ['water'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb931',
  //     no: 10,
  //     name: 'caterpie',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png',
  //     generation: 1,
  //     source: '',
  //     types: ['bug'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb932',
  //     no: 11,
  //     name: 'metapod',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png',
  //     generation: 1,
  //     source: '',
  //     types: ['bug'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb933',
  //     no: 12,
  //     name: 'butterfree',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png',
  //     generation: 1,
  //     source: '',
  //     types: ['bug', 'flying'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb934',
  //     no: 13,
  //     name: 'weedle',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png',
  //     generation: 1,
  //     source: '',
  //     types: ['bug', 'poison'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb935',
  //     no: 14,
  //     name: 'kakuna',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png',
  //     generation: 1,
  //     source: '',
  //     types: ['bug', 'poison'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb936',
  //     no: 15,
  //     name: 'beedrill',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png',
  //     generation: 1,
  //     source: '',
  //     types: ['bug', 'poison'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb937',
  //     no: 16,
  //     name: 'pidgey',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png',
  //     generation: 1,
  //     source: '',
  //     types: ['normal', 'flying'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb938',
  //     no: 17,
  //     name: 'pidgeotto',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
  //     generation: 1,
  //     source: '',
  //     types: ['normal', 'flying'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb939',
  //     no: 18,
  //     name: 'pidgeot',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png',
  //     generation: 1,
  //     source: '',
  //     types: ['normal', 'flying'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb93a',
  //     no: 19,
  //     name: 'rattata',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png',
  //     generation: 1,
  //     source: '',
  //     types: ['normal'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb93b',
  //     no: 20,
  //     name: 'raticate',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png',
  //     generation: 1,
  //     source: '',
  //     types: ['normal'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb93c',
  //     no: 21,
  //     name: 'spearow',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png',
  //     generation: 1,
  //     source: '',
  //     types: ['normal', 'flying'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb93d',
  //     no: 22,
  //     name: 'fearow',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png',
  //     generation: 1,
  //     source: '',
  //     types: ['normal', 'flying'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb93e',
  //     no: 23,
  //     name: 'ekans',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png',
  //     generation: 1,
  //     source: '',
  //     types: ['poison'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb93f',
  //     no: 24,
  //     name: 'arbok',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png',
  //     generation: 1,
  //     source: '',
  //     types: ['poison'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb940',
  //     no: 25,
  //     name: 'pikachu',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  //     generation: 1,
  //     source: '',
  //     types: ['electric'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb941',
  //     no: 26,
  //     name: 'raichu',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png',
  //     generation: 1,
  //     source: '',
  //     types: ['electric'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb942',
  //     no: 27,
  //     name: 'sandshrew',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png',
  //     generation: 1,
  //     source: '',
  //     types: ['ground'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb943',
  //     no: 28,
  //     name: 'sandslash',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png',
  //     generation: 1,
  //     source: '',
  //     types: ['ground'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb944',
  //     no: 29,
  //     name: 'nidoran-f',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png',
  //     generation: 1,
  //     source: '',
  //     types: ['poison'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  //   {
  //     _id: '65304576376d8d0612dbb945',
  //     no: 30,
  //     name: 'nidorina',
  //     image:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png',
  //     generation: 1,
  //     source: '',
  //     types: ['poison'],
  //     evolutions: [],
  //     files: [],
  //     __v: 0,
  //   },
  // ]
  const listPokemons = appUseSelector((state) => state.pokemon)
  return (
    <div className="flex flex-col items-center w-full justify-center my-6">
      <FilterPokemon />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {listPokemons.data.map((pokemon) => (
          <CardPokemon
            key={pokemon.no}
            no={pokemon.no}
            name={pokemon.name}
            urlImage={pokemon.image}
            isLoading={false}
            typesPoke={pokemon.types}
          />
        ))}
      </div>
    </div>
  )
}
