import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PokeAPIResponse } from '../../interfaces/pokeApiResponse'

export interface Person {
  id: number
  name: string
}

export interface PersonState {
  persons: Person[]
}

const initialState: PersonState = {
  persons: [],
}

export const fetchPoke = createAsyncThunk<{ id: number; name: string }, void>(
  'person/fetch',
  async () => {
    const response = await fetch(
      'https://nest-pokecraft.vercel.app/api/pokemon/5',
      {
        method: 'GET',
      },
    )
    const data: PokeAPIResponse = await response.json()
    return { id: data.no, name: data.name }
  },
)

export const PersonSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<{ name: string }>) => {
      state.persons.push({
        id: state.persons.length,
        name: action.payload.name,
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPoke.fulfilled, (state, action) => {
      state.persons.push(action.payload)
    })
  },
})

export const { addPerson } = PersonSlice.actions
export default PersonSlice.reducer
