import './notfound.css'
export const NotFound = () => {
  return (
    <div className="w-full h-80 flex items-center flex-col">
      <div className="not-found w-80 h-80 bg-cover bg-center"></div>
      <strong className="text-3xl">404 Not Found</strong>
    </div>
  )
}
