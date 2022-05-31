import React, { useState } from 'react'
import { useEffect } from 'react'
import './cardPrice.css'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'

export default function CardPrice(props) {
  const [fav, isFav]=useState(false)

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
    
  const setFav=(id)=>{
    let data = JSON.parse(localStorage.getItem('dataApi'))
    let existingFavs= JSON.parse(localStorage.getItem('favoritos')) || []
    let nombre = document.getElementById(`${props.id}`).textContent
    const fav = data.find(info => info.name === nombre)
    existingFavs.push(fav)
    localStorage.setItem('favoritos', JSON.stringify(existingFavs))
    isFav(true)
  }
  const deleteFav=(id)=>{
    let data = JSON.parse(localStorage.getItem('favoritos'))
    // let existingFavs= JSON.parse(localStorage.getItem('favoritos')) || []
    let nombre = document.getElementById(`${props.id}`).textContent
    const fav = data.find(info => info.name === nombre)
    const pos = data.indexOf(fav)
    data.splice(pos, 1)
    localStorage.removeItem('favoritos')
    localStorage.setItem('favoritos', JSON.stringify(data))
    isFav(false)
  }


  return (
    <>
      <tbody className='text-center'>
        <tr>
          <td className='mb-2'>#{props.ranking}</td>
          <td><img src={props.img} alt='monedas' className='moneda-img mb-2'/></td>
          <td className='mb-2 d-none d-md-table-cell' id={props.id}>{props.nombre}</td>
          <td className='mb-2 '>{props.simbolo}</td>
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
      </tbody>
  </>
  )
  // AiFillHeart
}
