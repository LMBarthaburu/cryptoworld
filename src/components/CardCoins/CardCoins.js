import React from 'react'
import './cardCoins.css'

export default function CardCoins(props) {
  return (
    <>
      <div className="card col-6 col-md-3 d-flex justify-content-center align-items-center my-3">
        <img src={props.img} className="card-img-top" alt="..."/>
        <div className="text-center">
          <h5 className="card-title">{props.simbolo}</h5>
          <p className="card-text m-0 mb-1">{props.nombre}</p>
          <p className="card-text m-0 mb-1">${props.precio}</p>
          <p className="card-text m-0 d-none d-md-block">${props.capitalizacion}</p>
        </div>
      </div>
    </>
  )
}
