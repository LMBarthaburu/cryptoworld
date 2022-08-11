import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Ayuda from '../../components/Ayuda/Ayuda'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './detail.css'

function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const [detalle, setDetalle] = useState([])
  const getDetail = async()=>{
    const storage = localStorage.getItem('detalles')
    const data = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const detalle = data.data.find(info => info.name === storage)
    setDetalle(detalle)
  }
  useEffect(()=>{
    getDetail()
  },[])

  const precio =(id)=>{
    const containerv = document.getElementById('cambioPrecio')
    const valor = detalle.price_change_percentage_24h
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
  const capitalizacion =(id)=>{
    const containerv = document.getElementById('cambioCap')
    const valor = detalle.market_cap_change_percentage_24h
    if(valor<=0){
      containerv.classList.add('red')
      containerv.classList.remove('green')
    }else{
      containerv.classList.add('green')
      containerv.classList.remove('red')

    }
  }
  useEffect(()=>{
    capitalizacion()
  })

  return (
    <>
      <Navbar/>
      <div className='container my-3 my-lg-5 pb-lg-5'>
        <div className='d-flex'>
          <h1>#{detalle.market_cap_rank} {detalle.name} ({detalle.symbol})</h1>
          <img src={detalle.image} alt="Coinx " className='detail-img'/>
        </div>
        <div className='my-4 align-items-start justify-content-center row'>
          <div className='col-12 col-md-6'>
            <h2>Precio actual: US${detalle.current_price}</h2>
            <h2 >24hr%: <span id='cambioPrecio'> {detalle.price_change_percentage_24h}%</span></h2>
            <h5>Precio max. ultimas 24hrs: US${detalle.high_24h}</h5>
            <h5>Precio min. ultimas 24hrs: US${detalle.low_24h}</h5>
            <br />
            <h2>Market Cap: {detalle.market_cap}</h2>
            <h3>24hr%: <span id='cambioCap'>{detalle.market_cap_change_percentage_24h}%</span></h3>
            <br />
          </div>
          <div className='col-12 col-md-6'>
            <h3>Precio max historico: US${detalle.ath}</h3>
            <h4>Variación sobre precio máximo: {detalle.ath_change_percentage}%</h4>
            <h5>Fecha: {detalle.ath_date}</h5>
            <h4>Precio min. historico: US${detalle.atl}</h4>
            <h5>Fecha:{detalle.atl_date}</h5>
            <br />
            <h5>Circulante/Cantidad máxima: <br />{detalle.circulating_supply}/{detalle.max_supply}</h5>
          </div>
        </div>
      </div>
      <Ayuda/>
      <Footer/>
    </>
  )
}

export default Detail