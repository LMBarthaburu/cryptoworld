import React, { useState } from 'react'
import { useEffect } from 'react'
import './cardPrice.css'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function CardPrice(props) {
  let [fav, isFav]=useState(false)  

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

  const setFav=async(id)=>{
    const data = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    let existingFavs= JSON.parse(localStorage.getItem('favoritos')) || []
    let nombre = document.getElementById(`${props.id}`).textContent
    const favoritos = data.data.find(info => info.name === nombre)
    fav = isFav(true)
    existingFavs.push(favoritos)
    localStorage.setItem('favoritos', JSON.stringify(existingFavs))
  }

  const deleteFav=(id)=>{
    let data = JSON.parse(localStorage.getItem('favoritos'))
    let nombre = document.getElementById(`${props.id}`).textContent
    const favoritos = data.find(info => info.name === nombre)
    const pos = data.indexOf(favoritos)
    data.splice(pos, 1)
    fav = isFav(false)
    localStorage.removeItem('favoritos')
    localStorage.setItem('favoritos', JSON.stringify(data))
  }
  const detalle =(id)=>{
    const detalle = document.getElementById(`${props.id}`).textContent
    console.log(detalle)
    localStorage.setItem('detalles',detalle)
  }

  return (
    <>
      <tr>
        <td className='mb-2'>#{props.ranking}</td>
        <td><img src={props.img} alt='monedas' className='moneda-img mb-2'/></td>
        <td className='mb-2 d-none d-md-table-cell' id={props.id}><Link className='link-detail' onClick={detalle} to="/coins-detail">{props.nombre}</Link></td>
        <td className='mb-2 '><Link className='link-detail' to="/coins-detail">{props.simbolo}</Link></td>
        <td className='mb-2' >${props.precio}</td>
        <td className='mb-2 ' onChange={precio} id={props.cambio}>{props.cambio}%</td>
        <td className='mb-2 d-none d-md-table-cell'>${props.capitalizacion}</td>
        <td>
          {fav?               
          <button className='btn-fav' onClick={deleteFav}><AiFillHeart className='icon-fav'/></button>:
          <button className='btn-fav' onClick={setFav}><AiOutlineHeart className='icon-fav'/></button>
          }
        </td>
      </tr>
  </>
  )
  // AiFillHeart
}
