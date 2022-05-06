import React from 'react';
import './errorPage.css';
import Astronaut from '../../Images/Astronaut.png'
import Navbar from '../../components/Navbar/Navbar';

export default function ErrorPage() {
  return (
    <>
      <Navbar/>
      <section className='error-page d-flex flex-column flex-lg-row align-items-center justify-content-center'>
        <img src={Astronaut} alt='404 imagen error'className='error-img'/>
        <div className='text-center ms-lg-5'>
          <h1 className='error'>404</h1>
          <h3 className='error-text'>OOOPS!! Pagina no encontrada!</h3>
        </div>
      </section>
    </>
  )
}
