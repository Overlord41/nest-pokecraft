import { CardPokemon } from './cardPokemon/CardPokemon'

export const PokemonComponent = () => {
  const listPokemons = [
    {
      _id: '6490c2e5b89c89e042732617',
      no: 9,
      name: 'blastoise',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
      generation: 1,
      types: ['water'],
      evolutions: [],
      files: [],
      __v: 0,
    },
    {
      _id: '6490c2e5b89c89e042732615',
      no: 7,
      name: 'squirtle',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      generation: 1,
      types: ['water'],
      evolutions: [],
      files: [],
      __v: 0,
    },
    {
      _id: '6490c2e5b89c89e04273260f',
      no: 1,
      name: 'bulbasaur',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      generation: 1,
      types: ['grass', 'poison'],
      evolutions: [],
      files: [],
      __v: 0,
    },
    {
      _id: '6490c2e5b89c89e042732610',
      no: 2,
      name: 'ivysaur',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
      generation: 1,
      types: ['grass', 'poison'],
      evolutions: [],
      files: [],
      __v: 0,
    },
    {
      _id: '6490c2e5b89c89e042732611',
      no: 3,
      name: 'venusaur',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
      generation: 1,
      types: ['grass', 'poison'],
      evolutions: [],
      files: [],
      __v: 0,
    },
  ]
  return (
    <div className="grid grid-cols-4 gap-4">
      {listPokemons.map((pokemon) => (
        <CardPokemon
          key={pokemon.no}
          no={pokemon.no}
          name={pokemon.name}
          urlImage={pokemon.image}
        />
      ))}
    </div>
  )
}
