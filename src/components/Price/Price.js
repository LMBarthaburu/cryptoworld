import React from 'react'
import { useState, useEffect } from 'react'
import CardPrice from '../CardPrice/CardPrice'
import './price.css'
import axios from 'axios'

export default function Price() {
  const [monedas, setMonedas] = useState([])
  const obtenerMonedas = async()=>{
    const resp = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    setMonedas(resp.data)
  }
  useEffect(()=>{
    obtenerMonedas()
  }, [])  

  return (
    <section className='container'>
      <h2>Top 100 monedas más populares según capitalización de mercado:</h2>
      <table className='w-100 my-3'>
        <thead className='text-center'>
          <tr>
            <th className='fw-bold'></th>
            <th className='fw-bold'>Logo</th>
            <th className='fw-bold d-none d-md-block'>Nombre</th>
            <th className='fw-bold '>Sigla</th>
            <th className='fw-bold'>Precio</th>
            <th className='fw-bold '>24h%</th>
            <th className='fw-bold d-none d-md-block'>Cap. de Mercado</th>
          </tr>
        </thead>
      {
        monedas.map(favorito=> <CardPrice key={favorito.id} ranking={favorito.market_cap_rank} img={favorito.image} nombre={favorito.name} simbolo={favorito.symbol} precio={favorito.current_price} cambio={favorito.price_change_percentage_24h} capitalizacion={favorito.market_cap} id={favorito.id}/>)
      }
      </table>
    </section>
  )
}
