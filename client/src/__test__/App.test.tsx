import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import App from '../App'
import { store } from '../redux/store'

describe('Componente App', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    )
  })

  test('Revisando render de App', () => {
    expect(true).toBeTruthy()
  })

  test('Saber si hay el texto Hola Mundo!', () => {
    const element = screen.getByText('Welcome to Pokemon World!')
    expect(element).toBeInTheDocument()
  })
})
