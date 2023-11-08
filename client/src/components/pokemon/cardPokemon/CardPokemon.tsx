import { PokemonIcons } from '../PokemonIcons'

interface infoPokemon {
  no: number
  name: string
  urlImage: string
  isLoading: boolean
  typesPoke: string[]
}

export const CardPokemon = ({
  no,
  name,
  urlImage,
  isLoading,
  typesPoke,
}: infoPokemon) => {
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer rounded-lg shadow-md bg-white  group h-72 w-72 p-3 hover:bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-lg">
      <div className="aboslute w-full h-0">
        <div className="relative top-1 left-1 shadow-lg shadow-sky-500/50 bg-gradient-to-r from-violet-500 to-sky-500 w-10 h-10 rounded-full flex justify-center items-center text-xs font-press-start text-white">
          {no}
        </div>
      </div>
      <div
        className={`bg-custom-background-${typesPoke[0]} bg-cover bg-center h-full w-full flex items-end justify-center rounded-md`}
      >
        {!isLoading ? (
          <img
            className="bg-cover bg-no-repeat mb-2 w-2/5 h-2/5 group-hover:scale-125"
            src={urlImage}
          />
        ) : (
          <div className="bokeball-charge w-1/6 h-1/6 bg-cover bg-center animate-bounce"></div>
        )}
      </div>
      <div className="font-press-start  text-xs mt-1">{name.toUpperCase()}</div>
      {typesPoke && <PokemonIcons typesPoke={typesPoke} />}
    </div>
  )
}
