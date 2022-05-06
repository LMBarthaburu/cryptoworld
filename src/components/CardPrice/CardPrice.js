import React from 'react'
// import { useEffect } from 'react'
import './cardPrice.css'
import {AiOutlineHeart} from 'react-icons/ai'

export default function CardPrice(props) {
  // const precio =()=>{
  //   const containerv = document.getElementById('cont')
  //   const valor = props.cambio
  //   if(valor<=0){
  //     containerv.classList.add('red')
  //     containerv.classList.remove('green')
  //   }else{
  //     containerv.classList.add('green')
  //     containerv.classList.remove('red')

  //   }
  // }

  // useEffect(()=>{
  //   precio()
  // })

  // const setFav=()=>{
  //   let data = JSON.parse(localStorage.getItem('dataApi'))
  //   let existingFavs= JSON.parse(localStorage.getItem('favoritos')) || []
  //   let fav = data.find(info => info.id === id)
  //   existingFavs.push(fav)
  //   localStorage.setItem('favoritos', JSON.stringify(existingFavs))
  // }


  return (
    <>
      <tbody className='text-center'>
        <tr>
          <td className='mb-2'>#{props.ranking}</td>
          <td><img src={props.img} alt='monedas' className='moneda-img mb-2'/></td>
          <td className='mb-2'>{props.nombre}</td>
          <td className='mb-2 d-none d-md-table-cell'>{props.simbolo}</td>
          <td className='mb-2' >${props.precio}</td>
          <td className='mb-2 ' id='cont'>{props.cambio}%</td>
          <td className='mb-2 d-none d-md-table-cell'>${props.capitalizacion}</td>
          <td><button className='btn-fav'><AiOutlineHeart className='icon-fav'/></button></td>
        </tr>
      </tbody>
  </>
  )
  // AiFillHeart
}
