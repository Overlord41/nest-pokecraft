import './loader.css'
export const Loader = () => {
  return (
    <div className="w-full h-80 flex items-center flex-col">
      <div className="loading-gengar w-80 h-80 bg-cover bg-center absolute">
        <div className="loader w-80 h-80 bg-cover bg-center relative bottom-0"></div>
      </div>
    </div>
  )
}
