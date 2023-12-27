import { Route, Routes } from 'react-router-dom'
import Navbar from './components/NavBar'

import { PokemonComponent } from './components/pokemon/PokemonComponent'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonComponent />} />
      </Routes>
    </div>
  )
}

export default App
