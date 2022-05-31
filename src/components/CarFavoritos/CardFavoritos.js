import React from 'react'
import './cardFavoritos.css'

function CardFavoritos(props) {
  return (
    <>
      <div className='col-6 col-md-4 col-lg-3' id={props.id}>
        <div className="card-fav text-center mb-4">
          <img src={props.img} className="card-img-top-fav" alt="criptomoneda logo"/>
          <div className="card-body">
            <h3><span>#{props.ranking} - </span>{props.nombre}</h3>
            <h4>{props.simbolo}</h4>
            <h4 className="card-text">${props.precio}</h4>
            <h5>${props.capitalizacion}</h5>
            <h5>{props.cambio}%</h5>
          </div>
        </div>
      </div>
      </>
  )
}

export default CardFavoritos