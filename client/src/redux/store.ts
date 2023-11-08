import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { PokemonSlice } from './features/pokemonSlice'

export const store = configureStore({
  reducer: {
    pokemon: PokemonSlice.reducer,
  },
})

export const appUseDispatch: () => typeof store.dispatch = useDispatch
export const appUseSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector
