import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosAdapter } from '../../common/adapter/axios.adapter'
import { PokeAPIResponse } from '../../interfaces/pokeApiResponse'
const urlApiPokecraft = import.meta.env.VITE_URL_API_POKECRAFT

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

interface querysGetPokemons {
  page: number
  limit: number
  order: string
  type: string
  generation: number
}

export const fetchPoke = createAsyncThunk<PokeAPIResponse[], querysGetPokemons>(
  'pokemon/fetch',
  async (queryParams) => {
    const { page = 1, limit = 5, order, type, generation } = queryParams
    const fetching = new AxiosAdapter()
    console.log(urlApiPokecraft)
    let url = `${urlApiPokecraft}?page=${page}&limit=${limit}&order=${order}`

    if (type) {
      url += `&type=${type}`
    }

    if (generation) {
      url += `&generation=${generation}`
    }

    try {
      const response = await fetching.get<PokeAPIResponse[]>(url)
      return response
    } catch (error) {
      throw new Error('This is an error - check logs')
    }
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
