import React from 'react'
import './descarga.css'
import Celular from '../../Images/Celular-wallet.png'
import Button from '../Button/Button'

export default function Descarga() {
  return (
    <section className='descarga-bkg py-1'>
      <div className='container text-center text-md-start'>
        <h2 className='descarga-title d-block d-lg-none fw-bold'>Opera cuando quieras y donde quieras!</h2>
        <p className='descarga-txt d-block d-lg-none'>Mantente al día con nuestra aplicación, web o desde nuestro programa para escritorio</p>
        <div className='d-flex align-items-center flex-column flex-md-row'>
          <div className='text-center my-3'>
              <img src={Celular} alt='wallet mobil'className='descarga-img'></img>
          </div>
          <div className='pe-lg-5'>
            <h2 className='descarga-title d-none d-lg-block fw-bold'>Opera cuando quieras y donde quieras!</h2>
            <p className='descarga-txt d-none d-lg-block'>Mantente al día con nuestra aplicación, web o desde nuestro programa para escritorio</p>
            <h3 className='descarga-subtitle fw-bold'>Deposita fondos en tu cuenta</h3>
            <p className='descarga-txt'>Añade fondos a tu cuenta de criptomonedas para comenzar a operar. Puedes añadir fondos a través de distintos métodos de pago.</p>
            <h3 className='descarga-subtitle fw-bold'>Verifica tu identidad</h3>
            <p className='descarga-txt'>Completa el proceso de verificación de identidad para proteger tu cuenta y tus transacciones.</p>
            <h3 className='descarga-subtitle fw-bold'>Empieza a operar</h3>
            <p className='descarga-txt'>Ya lo tienes todo listo! Compra y vende criptomonedas, establece compras recurrentes para tus inversiones y descubre todos los productos de Binance.</p>
            <Button titulo='Descarga la App!' link='/Descarga' />
            </div>
          </div>
      </div>
    </section>
  )
}
