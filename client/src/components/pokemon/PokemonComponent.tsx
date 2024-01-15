import { appUseDispatch, appUseSelector } from '../../redux/store'
import React, { useEffect } from 'react'
// import { useSearchParams } from 'react-router-dom'
import { CardPokemon } from './cardPokemon/CardPokemon'
import { FilterPokemon } from './FilterPokemon'
import ResponsivePagination from 'react-responsive-pagination'
import { fetchPoke } from '../../redux/features/pokemonSlice'
import 'react-responsive-pagination/themes/classic.css'
import { useLocation, useSearchParams } from 'react-router-dom'
import { setPage } from '../../redux/features/pokemonSlice'
import { Loader } from '../loader/Loader'
import { NotFound } from '../notFound/NotFound'
import { ErrorCompontent } from '../errorComponent/ErrorCompontent'

export const PokemonComponent: React.FC = () => {
  const paginate = appUseSelector((state) => state.pokemon.paginate)
  const listPokemons = appUseSelector((state) => state.pokemon)

  const dispatch = appUseDispatch()
  const [params, setParams] = useSearchParams()

  const query = new URLSearchParams(useLocation().search)

  // const page = query.get('page')
  const order = query.get('order')
  const limit = Number(query.get('limit'))
  const type = query.get('type')
  const generation = Number(query.get('generation'))

  const onChangePage = (newPage: number) => {
    dispatch(setPage(newPage))
    params.set('page', String(newPage))
    setParams(params)
    dispatch(
      fetchPoke({
        page: newPage,
        order: order ? order : paginate.order,
        limit: limit ? limit : paginate.limit,
        type: type ? type : paginate.type,
        generation: generation ? generation : paginate.generation,
      }),
    )
  }

  useEffect(() => {
    dispatch(
      fetchPoke({
        page: 1,
        order: order ? order : paginate.order,
        limit: limit ? limit : paginate.limit,
        type: type ? type : paginate.type,
        generation: generation ? generation : paginate.generation,
      }),
    )
  }, [])
  return (
    <div className="flex flex-col items-center w-full justify-center my-6">
      <FilterPokemon />
      {listPokemons.isLoading && <Loader />}
      {listPokemons.isError && <ErrorCompontent />}
      {listPokemons.data.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mb-4">
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
          <ResponsivePagination
            current={paginate.page}
            total={paginate.totalPages}
            onPageChange={onChangePage}
          />
        </>
      ) : (
        <NotFound />
      )}
    </div>
  )
}
