import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/NavBar'

import { PokemonComponent } from './components/pokemon/PokemonComponent'
import { fetchPoke } from './redux/features/pokemonSlice'
import { appUseDispatch } from './redux/store'

function App() {
  const dispatch = appUseDispatch()
  useEffect(() => {
    dispatch(
      fetchPoke({
        page: 1,
        limit: 15,
        order: 'asc',
        type: '',
        generation: 1,
      }),
    )
  }, [])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/pokemon" element={<PokemonComponent />} />
      </Routes>
    </div>
  )
}

export default App
