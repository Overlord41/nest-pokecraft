interface paginateInterface {
  search: null | string
  isFirstRender: boolean
  mode: string
  page: number
  limit: number
  order: string
  type: null | string
  generation: number
}

export const paginateSessionStorage = (props: paginateInterface) => {
  // Verificar si ya existe un objeto en sessionStorage con la clave 'paginateSession'
  const existingData = sessionStorage.getItem('paginateSession')

  if (existingData) {
    // Si existe, convierte los datos en un objeto JavaScript
    const storedData = JSON.parse(existingData)

    // Ahora, puedes modificar los valores según las props (si se proporcionan)
    if (props.search !== undefined) {
      storedData.search = props.search
    }
    if (props.isFirstRender !== undefined) {
      storedData.isFirstRender = props.isFirstRender
    }
    if (props.mode !== undefined) {
      storedData.mode = props.mode
    }
    if (props.page !== undefined) {
      storedData.page = props.page
    }
    if (props.limit !== undefined) {
      storedData.limit = props.limit
    }
    if (props.order !== undefined) {
      storedData.order = props.order
    }
    if (props.type !== undefined) {
      storedData.type = props.type
    }
    if (props.generation !== undefined) {
      storedData.generation = props.generation
    }

    // Guardar el objeto modificado en sessionStorage
    sessionStorage.setItem('paginateSession', JSON.stringify(storedData))
    return storedData
  } else {
    // Si no existe, crea un nuevo objeto con los valores por defecto
    const defaultData = {
      search: null,
      isFirstRender: true,
      mode: 'light',
      page: 1,
      limit: 15,
      order: 'asc',
      type: null,
      generation: 1,
    }

    // Guardar el objeto por defecto en sessionStorage
    sessionStorage.setItem('paginateSession', JSON.stringify(defaultData))
    return defaultData
  }
}
