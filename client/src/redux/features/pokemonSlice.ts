import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosAdapter } from '../../common/adapter/axios.adapter'
import { PokeAPIResponse } from '../../interfaces/pokeApiResponse'
const urlApiPokecraft = import.meta.env.VITE_URL_API_POKECRAFT

interface paginateInter {
  mode: 'light' | 'dark'
  page: number
  limit: number
  order: 'asc' | 'desc'
  type: string
  generation: number
  totalPages: number
}

interface interfacePoke {
  data: PokeAPIResponse[]
  isLoading: boolean
  isError: boolean
  paginate: paginateInter
}

interface httpPokeResonse {
  data: PokeAPIResponse[]
  totalPages: number
}

const initialState: interfacePoke = {
  data: [],
  isLoading: false,
  isError: false,
  paginate: {
    mode: 'light',
    page: 1,
    limit: 10,
    order: 'asc',
    type: '',
    generation: 1,
    totalPages: 0,
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
  'pokemons/fetch',
  async (queryParams) => {
    const {
      page = 1,
      limit = 10,
      order = 'asc',
      type,
      generation,
    } = queryParams
    const fetching = new AxiosAdapter()

    let url = `${urlApiPokecraft}?page=${page}&limit=${limit}&order=${order}`

    if (type && type !== '' && type !== 'none') {
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
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.paginate.page = action.payload
    },
    setOrder: (state, action: PayloadAction<string>) => {
      state.paginate.order = action.payload as 'asc' | 'desc'
      state.paginate.page = 1
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.paginate.limit = action.payload
      state.paginate.page = 1
    },
    setType: (state, action: PayloadAction<string>) => {
      state.paginate.type = action.payload
      state.paginate.page = 1
    },
    restoreInitialState: (state) => {
      // Restaura el estado inicial
      state.paginate = {
        ...state.paginate,
        ...{ page: 1, limit: 10, order: 'asc', type: '', generation: 1 },
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPoke.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(fetchPoke.fulfilled, (state, action) => {
        state.data = action.payload.data
        state.isError = false
        state.isLoading = false
        state.paginate.totalPages = action.payload.totalPages
      })
      .addCase(fetchPoke.rejected, (state) => {
        state.isError = true
        state.paginate.totalPages = 0
        state.isLoading = false
      })
  },
})
export const { restoreInitialState, setType, setLimit, setPage, setOrder } =
  PokemonSlice.actions

export default PokemonSlice.reducer
