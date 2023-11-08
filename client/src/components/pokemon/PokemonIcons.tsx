import React from 'react'

export const PokemonIcons: React.FC<{ typesPoke: string[] }> = ({
  typesPoke,
}) => {
  return (
    <div className="w-full flex justify-center">
      {typesPoke.map((elem, index) => (
        <div
          className="flex flex-col justify-center items-center p-1"
          key={index}
        >
          <div className="p-1">
            <div className={`icon-${elem} h-6 w-6 bg-cover bg-center`}></div>
          </div>
          <p className="text-xxs font-press-start">{elem}</p>
        </div>
      ))}
    </div>
  )
}
