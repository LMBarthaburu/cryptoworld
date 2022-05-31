import axios from 'axios'
import './slider.css'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import CardCoins from '../CardCoins/CardCoins'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'


export default function Slider() {
  const [sliderUno, setMonedasSliderUno]=useState([])


  const slider1 =async ()=>{
    const resp = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20binancecoin%2C%20ripple%2C%20solana%2C%20cardano%2c%20polkadot%2C%20dogecoin&order=market_cap_desc&page=1&sparkline=false')
    setMonedasSliderUno(resp.data)
  }


  useEffect(()=>{
    slider1()
  })

  return (
    <section className='my-3 py-3'>
      <div className='container'>
        <div className='d-lg-flex justify-content-between'>
          <h2 className='fw-bold'>Criptomones más populares del mercado:</h2>
          <Link to='./coins' className='d-flex align-items-center link-slider'><p className='m-0'>ver listado completo<MdOutlineKeyboardArrowRight/></p></Link>
        </div>
              <div className='row'>
                {
                sliderUno.map(card => <CardCoins key={card.id} ranking={card.market_cap_rank} img={card.image} nombre={card.name} simbolo={card.symbol} precio={card.current_price} capitalizacion={card.market_cap}/>)
                }
              </div>
      </div>
    </section>
  )
}
