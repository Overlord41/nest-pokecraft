import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { fetchPoke, restoreInitialState } from '../redux/features/pokemonSlice'
import { appUseDispatch } from '../redux/store'

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const location = useLocation()

  const dispatch = appUseDispatch()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const restoreState = () => {
    dispatch(restoreInitialState())
    dispatch(
      fetchPoke({
        page: 1,
        order: 'asc',
        limit: 10,
        type: '',
        generation: 1,
      }),
    )
  }

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="h-10 w-28">
          <div
            className="logo-pokecraft w-full h-full bg-cover bg-center"
            onClick={restoreState}
          ></div>
        </Link>
        <button className="lg:hidden text-white" onClick={toggleMobileMenu}>
          Menú
        </button>
        <ul
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:space-x-4`}
        >
          <li>
            <NavLink
              to="/"
              className={`text-white ${
                location.pathname === '/' ? 'text-yellow-500' : ''
              }`}
              onClick={restoreState}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/acerca"
              className={`text-white ${
                location.pathname === '/acerca' ? 'text-yellow-500' : ''
              }`}
            >
              Acerca de
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/servicios"
              className={`text-white ${
                location.pathname === '/servicios' ? 'text-yellow-500' : ''
              }`}
            >
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={`text-white ${
                location.pathname === '/contacto' ? 'text-yellow-500' : ''
              }`}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
