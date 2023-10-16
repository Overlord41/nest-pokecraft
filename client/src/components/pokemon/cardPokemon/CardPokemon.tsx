export const CardPokemon = ({
  no,
  name,
  urlImage,
}: {
  no: number
  name: string
  urlImage: string
}) => {
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer rounded-lg shadow-md bg-white  group h-72 w-72 p-3 hover:bg-blue-100 hover:shadow-lg">
      <div className="bg-cover bg-no-repeat h-full w-full flex items-end justify-center rounded-md bg-[url('./images/pokeCards/bgpokecard.webp')]">
        {urlImage ? (
          <img
            className="bg-cover bg-no-repeat mb-2 w-2/5 h-2/5 group-hover:scale-125"
            src={urlImage}
          />
        ) : (
          <div className="bokeball-charge w-1/6 h-1/6 bg-cover bg-center animate-bounce"></div>
        )}
      </div>
      <div className="font-pixel text-gray-600 text-xl">{`${no} ${name}`}</div>
    </div>
  )
}
