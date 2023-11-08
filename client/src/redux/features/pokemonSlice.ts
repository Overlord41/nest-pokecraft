import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosAdapter } from '../../common/adapter/axios.adapter'
import { PokeAPIResponse } from '../../interfaces/pokeApiResponse'
const urlApiPokecraft = import.meta.env.VITE_URL_API_POKECRAFT

interface paginateInter {
  isFirstRender: boolean
  mode: 'light' | 'dark'
  page: number
  limit: number
  order: 'asc' | 'desc'
  type: string | null
  generation: number
}

interface interfacePoke {
  data: PokeAPIResponse[]
  totalResults: number
  isLoading: boolean
  isError: boolean
  paginate: paginateInter
}

interface httpPokeResonse {
  data: PokeAPIResponse[]
  totalResults: number
}

const initialState: interfacePoke = {
  data: [],
  totalResults: 0,
  isLoading: false,
  isError: false,
  paginate: {
    isFirstRender: false,
    mode: 'light',
    page: 1,
    limit: 15,
    order: 'asc',
    type: null,
    generation: 1,
  },
}

interface querysGetPokemons {
  page: number
  limit: number
  order: string
  type: string
  generation: number
}

export const fetchPoke = createAsyncThunk<httpPokeResonse, querysGetPokemons>(
  'pokemon/fetch',
  async (queryParams) => {
    const { page = 1, limit = 5, order, type, generation } = queryParams
    const fetching = new AxiosAdapter()

    let url = `${urlApiPokecraft}?page=${page}&limit=${limit}&order=${order}`

    if (type) {
      url += `&type=${type}`
    }

    if (generation) {
      url += `&generation=${generation}`
    }

    try {
      const response = await fetching.get<httpPokeResonse>(url)
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
        state.data = action.payload.data
        state.totalResults = action.payload.totalResults
        state.isLoading = false
      })
      .addCase(fetchPoke.rejected, (state) => {
        state.isError = true
        state.totalResults = 0
        state.isLoading = false
      })
  },
})
export default PokemonSlice.reducer
