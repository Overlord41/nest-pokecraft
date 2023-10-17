import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosAdapter } from '../../common/adapter/axios.adapter'
import { PokeAPIResponse } from '../../interfaces/pokeApiResponse'

interface interfacePoke {
  data: PokeAPIResponse[]
  isLoading: boolean
  isError: boolean
}

const initialState: interfacePoke = {
  data: [],
  isLoading: false,
  isError: false,
}

export const fetchPoke = createAsyncThunk<PokeAPIResponse[]>(
  'pokemon/fetch',
  async () => {
    const fetching = new AxiosAdapter()
    const response = await fetching.get<PokeAPIResponse[]>(
      'https://nest-pokecraft.vercel.app/api/pokemon',
    )
    const data: PokeAPIResponse[] = response
    return data
  },
)

export const PokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPoke.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(fetchPoke.fulfilled, (state, action) => {
        state.data = action.payload
        state.isLoading = false
      })
      .addCase(fetchPoke.rejected, (state) => {
        state.isError = true
        state.isLoading = false
      })
  },
})
export default PokemonSlice.reducer
