import React from 'react'
import './card.css'

export default function Card(props) {
  return (
    <>
        <div className='text-center hero-info-txt-container'>
          <h5 className='hero-info-txt'>{props.cardTitulo}</h5>
          <p className='hero-info-subtxt m-0'>{props.cardTexto}</p>
        </div>
    </>
  )
}
