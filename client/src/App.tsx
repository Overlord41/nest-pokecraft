import { Add } from './components/Add'
import { List } from './components/List'

function App() {
  return (
    <div>
      <Add />
      <List />
      <div>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-violet-600 text-center p-5 text-white">01</div>
          <div className="bg-violet-600 text-center p-5 text-white">02</div>
          <div className="bg-violet-600 text-center p-5 text-white">03</div>
          <div className="bg-violet-600 text-center p-5 text-white">04</div>
          <div className="bg-violet-600 text-center p-5 text-white">05</div>
          <div className="bg-violet-600 text-center p-5 text-white">06</div>
          <div className="bg-violet-600 text-center p-5 text-white">07</div>
          <div className="bg-violet-600 text-center p-5 text-white">08</div>
          <div className="bg-violet-600 text-center p-5 text-white">09</div>
        </div>
        <h1 className="font-bold underline text-xs">Hello world!</h1>
      </div>
    </div>
  )
}

export default App
