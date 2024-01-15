import './ErrorComponent.css'

export const ErrorCompontent = () => {
  return (
    <div className="w-full h-96 flex items-center flex-col">
      <div className="error-found w-80 h-80 bg-cover bg-center"></div>
      <strong className="text-3xl">Error!</strong>
      <strong className="text-3xl">No deberías estar aquí</strong>
    </div>
  )
}
