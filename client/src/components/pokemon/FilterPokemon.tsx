import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { appUseDispatch, appUseSelector } from '../../redux/store'
import {
  fetchPoke,
  setLimit,
  setOrder,
  setType,
} from '../../redux/features/pokemonSlice'

export const FilterPokemon: React.FC = () => {
  const dispatch = appUseDispatch()
  const paginate = appUseSelector((state) => state.pokemon.paginate)

  const query = new URLSearchParams(useLocation().search)
  const [params, setParams] = useSearchParams()

  const order = query.get('order')
  const limit = Number(query.get('limit'))
  const type = query.get('type')
  const generation = Number(query.get('generation'))

  const onChangefilters = (
    e: React.ChangeEvent<HTMLSelectElement>,
    typeFilter: string,
  ) => {
    const newFilters = {
      page: 1,
      order: order ? order : paginate.order,
      limit: limit ? limit : paginate.limit,
      type: type ? type : paginate.type,
      generation: generation ? generation : paginate.generation,
    }

    if (typeFilter === 'order') {
      dispatch(setOrder(e.target.value))
      newFilters.order = e.target.value
      params.set('order', e.target.value)
    }
    if (typeFilter === 'limit') {
      dispatch(setLimit(+e.target.value))
      newFilters.limit = +e.target.value
      params.set('limit', e.target.value)
    }
    if (typeFilter === 'type') {
      dispatch(setType(e.target.value))
      newFilters.type = e.target.value
      params.set('type', e.target.value)
    }
    setParams(params)
    dispatch(fetchPoke(newFilters))
  }

  const optionsOrder = [
    { value: 'asc', label: 'Asc' },
    { value: 'desc', label: 'Desc' },
  ]

  const optionsItems = [
    { value: '10', label: '10' },
    { value: '15', label: '15' },
    { value: '20', label: '20' },
  ]

  const typesPokemon = [
    { value: 'bug', label: 'Bug' },
    { value: 'dark', label: 'Dark' },
    { value: 'dragon', label: 'Dragon' },
    { value: 'electric', label: 'Electric' },
    { value: 'fairy', label: 'Fairy' },
    { value: 'fighting', label: 'Fighting' },
    { value: 'fire', label: 'Fire' },
    { value: 'flying', label: 'Flying' },
    { value: 'ghost', label: 'Ghost' },
    { value: 'grass', label: 'Grass' },
    { value: 'ground', label: 'Ground' },
    { value: 'ice', label: 'Ice' },
    { value: 'normal', label: 'Normal' },
    { value: 'poison', label: 'Poison' },
    { value: 'psychic', label: 'Psychic' },
    { value: 'rock', label: 'Rock' },
    { value: 'steel', label: 'Steel' },
    { value: 'water', label: 'Water' },
  ]

  return (
    <div className="flex h-8 my-8">
      <div className="mr-5">
        Type:
        <select
          className="ml-2 p-2 border-1 border-gray-300 rounded-md shadow focus:outline-none focus:ring focus:border-violet-500"
          value={paginate.type}
          onChange={(e) => onChangefilters(e, 'type')}
        >
          {typesPokemon.map((el) => (
            <option key={el.value} value={el.value}>
              {el.label}
            </option>
          ))}
        </select>
      </div>
      <div className="mr-5">
        Generation:
        <select className="ml-2 p-2 border-1 border-gray-300 rounded-md shadow focus:outline-none focus:ring focus:border-violet-500">
          <option>1</option>
        </select>
      </div>
      <div className="mr-5">
        Order:
        <select
          className="ml-2 p-2 border-1 border-gray-300 rounded-md shadow focus:outline-none focus:ring focus:border-violet-500"
          value={paginate.order}
          onChange={(e) => onChangefilters(e, 'order')}
        >
          {optionsOrder.map((el) => (
            <option key={el.value} value={el.value}>
              {el.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        Items:
        <select
          className="ml-2 p-2 border-1 border-gray-300 rounded-md shadow focus:outline-none focus:ring focus:border-violet-500"
          value={paginate.limit}
          onChange={(e) => onChangefilters(e, 'limit')}
        >
          {optionsItems.map((el) => (
            <option key={el.value} value={el.value}>
              {el.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
