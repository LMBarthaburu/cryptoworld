import React from 'react'
import './cardCoins.css'
import {Link} from 'react-router-dom'

export default function CardCoins(props) {

  const detalle =(id)=>{
    const detalle = document.getElementById(`${props.id}`).textContent
    localStorage.setItem('detalles',detalle)
  }

  return (
    <>
      <Link className='link-detail col-6 col-md-3 my-3' onClick={detalle} to="/coins-detail">
        <div className="card d-flex justify-content-center align-items-center">
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className="text-center">
              <h5 className="card-title">{props.simbolo}</h5>
              <p className="card-text m-0 mb-1" id={props.id}>{props.nombre}</p>
              <p className="card-text m-0 mb-1">${props.precio}</p>
              <p className="card-text m-0 d-none d-md-block">${props.capitalizacion}</p>
            </div>
        </div>
      </Link>
    </>
  )
}
