import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './navbar.css'
import {RiStockFill} from 'react-icons/ri'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white position-sticky top-0">
        <div className="container d-flex justify-content-between">
          <Link className="navbar-brand d-flex align-items-center" to="/"><RiStockFill/><span className='navbar-brand-dif ms-1'>C</span>ryto<span className='navbar-brand-dif'>W</span>orld</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end me-lg-5" id="navbarNavDropdown">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <Link className="nav-link" to="/coins">Cotizaciones</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favoritos">Favoritos</Link>
              </li>
              <li className="nav-item d-lg-none">
                <Link className="nav-link" to="/logIn">Iniciar Sesion</Link>
              </li>
            </ul>
          </div>
          <div className="d-none d-lg-block">
            <Button titulo="Iniciar Sesión" link="/logIn" />
          </div>
        </div>
      </nav>
    </>
  )
}
