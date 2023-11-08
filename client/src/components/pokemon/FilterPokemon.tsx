import React from 'react'

export const FilterPokemon: React.FC = () => {
  return (
    <div className="flex h-8 my-8">
      <div className="mr-5">
        Type:
        <select className="ml-2 p-2 border-1 border-gray-300 rounded-md shadow focus:outline-none focus:ring focus:border-violet-500">
          <option className="text-gray-500">Fire</option>
          <option className="text-gray-500">Water</option>
          <option className="text-gray-500">Grass</option>
        </select>
      </div>
      <div className="mr-5">
        Generation:
        <select className="ml-2 p-2 border-1 border-gray-300 rounded-md shadow focus:outline-none focus:ring focus:border-violet-500">
          <option>1</option>
          <option>2</option>
        </select>
      </div>
      <div className="mr-5">
        Order:
        <select className="ml-2 p-2 border-1 border-gray-300 rounded-md shadow focus:outline-none focus:ring focus:border-violet-500">
          <option>asc</option>
          <option>dec</option>
        </select>
      </div>
      <div>
        Items:
        <select className="ml-2 p-2 border-1 border-gray-300 rounded-md shadow focus:outline-none focus:ring focus:border-violet-500">
          <option>10</option>
          <option>15</option>
          <option>20</option>
        </select>
      </div>
    </div>
  )
}
