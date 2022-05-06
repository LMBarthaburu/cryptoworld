import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import CardPrice from '../CardPrice/CardPrice'
import './price.css'
export default function Price() {
  const [monedas, setMonedas] = useState([])

  const obtenerMonedas = async()=>{
    const resp = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false')
    setMonedas(resp.data)
    localStorage.setItem('dataApi', JSON.stringify(resp.data))
  }

  console.log(monedas)

  useEffect(()=>{
    obtenerMonedas()
  }, [])

  return (
    <section className='container'>
      <h2>Monedas más populares del mercado:</h2>
      <h5> Top 20 según capitalización de mercado</h5>
      <table className='w-100 my-3'>
        <tr className='text-center'>
          <th className='fw-bold'></th>
          <th className='fw-bold'>Logo</th>
          <th className='fw-bold'>Nombre</th>
          <th className='fw-bold d-none d-md-block'>Simbolo</th>
          <th className='fw-bold'>Precio</th>
          <th className='fw-bold d-none d-md-block'>Cambio en 24h</th>
          <th className='fw-bold'>Cap. de Mercado</th>
        </tr>
      {
        monedas.map(moneda=> <CardPrice key={moneda.id} ranking={moneda.market_cap_rank} img={moneda.image} nombre={moneda.name} simbolo={moneda.symbol} precio={moneda.current_price} cambio={moneda.price_change_percentage_24h} capitalizacion={moneda.market_cap}/>)
      }
      </table>
    </section>
  )
}
