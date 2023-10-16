import { Add } from './components/Add'
import { List } from './components/List'
import { PokemonComponent } from './components/pokemon/PokemonComponent'

function App() {
  return (
    <div>
      <Add />
      <List />
      <h1 className="font-bold underline text-xs">Welcome to Pokemon World!</h1>
      <div className="flex items-center w-full justify-center">
        <PokemonComponent />
      </div>
    </div>
  )
}

export default App
