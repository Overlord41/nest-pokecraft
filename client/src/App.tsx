// import { useEffect } from 'react'
import { Add } from './components/Add'
import { List } from './components/List'
import { PokemonComponent } from './components/pokemon/PokemonComponent'
// import { fetchPoke } from './redux/features/pokemonSlice'
// import { appUseDispatch } from './redux/store'

function App() {
  // const dispatch = appUseDispatch()
  // useEffect(() => {
  //   dispatch(fetchPoke())
  // }, [])
  return (
    <div>
      <Add />
      <List />
      <h1 className="font-bold underline text-xs">Welcome to PokeCraft!</h1>
      <div className="flex items-center w-full justify-center">
        <PokemonComponent />
      </div>
    </div>
  )
}

export default App
