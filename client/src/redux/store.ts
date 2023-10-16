import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { PersonSlice } from './features/personSlice'

export const store = configureStore({
  reducer: {
    person: PersonSlice.reducer,
  },
})

export const appUseDispatch: () => typeof store.dispatch = useDispatch
export const appUseSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector