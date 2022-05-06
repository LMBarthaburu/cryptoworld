import axios from 'axios'
import './slider.css'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import CardCoins from '../CardCoins/CardCoins'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'


export default function Slider() {
  const [sliderUno, setMonedasSliderUno]=useState([])
  const [sliderDos, setMonedasSliderDos]=useState([])


  const slider1 =async ()=>{
    const resp = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20binancecoin%2C%20ripple&order=market_cap_desc&page=1&sparkline=false')
    setMonedasSliderUno(resp.data)
  }
  const slider2 =async ()=>{
    const resp = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=solana%2C%20terra-luna%2C%20cardano%2C%20dogecoin&order=market_cap_desc&page=1&sparkline=false')
    setMonedasSliderDos(resp.data)
  }

  useEffect(()=>{
    slider1()
    slider2()
  },[])

  return (
    <section className='slider py-5 mb-5'>
      <div className='container'>
        <div className='d-lg-flex justify-content-between mb-5'>
          <h2 className='fw-bold'>Criptomones más populares del mercado:</h2>
          <Link to='./coins' className='d-flex align-items-center link-slider'><p className='m-0'>ver listado completo<MdOutlineKeyboardArrowRight/></p></Link>
        </div>
        <div id="carouselExampleControls" className="carousel slide container" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='row'>
                {
                sliderUno.map(card => <CardCoins key={card.id} ranking={card.market_cap_rank} img={card.image} nombre={card.name} simbolo={card.symbol} precio={card.current_price} capitalizacion={card.market_cap}/>)
                }
              </div>
            </div>
            <div className="carousel-item">
              <div className='row'>
                {
                sliderDos.map(card => <CardCoins key={card.id} ranking={card.market_cap_rank} img={card.image} nombre={card.name} simbolo={card.symbol} precio={card.current_price} capitalizacion={card.market_cap}/>)
                }
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
          </button>
      </div>
      </div>
    </section>
  )
}
