import React, { useEffect } from 'react'
import './cardFavoritos.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom'

function CardFavoritos(props) {
  const deleteFav=(id)=>{
    let data = JSON.parse(localStorage.getItem('favoritos'))
    let nombre = document.getElementById(`${props.id}`).textContent
    const fav = data.find(info => info.name === nombre)
    const pos = data.indexOf(fav)
    data.splice(pos, 1)
    localStorage.removeItem('favoritos')
    localStorage.setItem('favoritos', JSON.stringify(data))
    window.location.reload()
  }
  const precio =(id)=>{
    const containerv = document.getElementById(props.cambio)
    const valor = props.cambio
    if(valor<=0){
      containerv.classList.add('red')
      containerv.classList.remove('green')
    }else{
      containerv.classList.add('green')
      containerv.classList.remove('red')

    }
  }
  useEffect(()=>{
    precio()
  })

  const detalle =(id)=>{
    const detalle = document.getElementById(`${props.id}`).textContent
    console.log(detalle)
    localStorage.setItem('detalles',detalle)
  }

  return (
    <>
      <div className='col-6 col-md-4 col-lg-3 card-position' id={props.name}>
        <div className="card-fav text-center">
          <Link className='link-detail' to="/coins-detail" onClick={detalle}>
            <img src={props.img} className="card-img-top-fav" alt="criptomoneda logo"/>
            <div className="card-body">
              <h3 id={props.id} >{props.nombre}</h3>
              <h4>{props.simbolo}</h4>
              <h4 className="card-text">${props.precio}</h4>
              <h5>${props.capitalizacion}</h5>
              <h5 id={props.cambio}>{props.cambio}%</h5>
            </div>
          </Link>
          <button onClick={deleteFav} className='card-fav-btn'><AiFillCloseCircle/></button>
        </div>
      </div>
      </>
  )
}

export default CardFavoritos