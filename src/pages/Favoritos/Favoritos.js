import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import CardFavoritos from '../../components/CarFavoritos/CardFavoritos'


function Favoritos() {

  const [favoritos, setFavoritos] = useState([])

  const getData=()=>{
    const data = JSON.parse(localStorage.getItem('favoritos'))
    setFavoritos(data)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      <Navbar/>
      <div className='container'>
        <h1 className='my-3 my-lg-5'>Monedas Favoritas:</h1>
        <div className='row'>
          {
          favoritos.map(favorito=><CardFavoritos key={favorito.id} ranking={favorito.market_cap_rank} img={favorito.image} nombre={favorito.name} simbolo={favorito.symbol} precio={favorito.current_price} cambio={favorito.price_change_percentage_24h} capitalizacion={favorito.market_cap} id={favorito.id}/>)
          }
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Favoritos