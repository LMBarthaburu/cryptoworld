import React from 'react'
import Card from '../Card/Card'
import './heroInfo.css'

export default function HeroInfo() {
  return (
    <section className='container mt-3 mt-md-0'>
      <div className='row justify-content-center mb-3'>
        <Card cardTitulo='70 000 M€' cardTexto='de volumen de trading en 24 h en el exchange'/>
        <Card cardTitulo='Más de 600' cardTexto='criptomonedas disponibles, NFT, memecoins, etc'/>
        <Card cardTitulo='90 millones' cardTexto='de usuarios confían e invierten en CryptoWorld'/>
        <Card cardTitulo='Menos del 0,1%' cardTexto='las comisiones más bajas de todo el mercado'/>
      </div>
    </section>
  )
}
