import React, {useEffect} from 'react'
import axios from 'axios'
import Ayuda from '../../components/Ayuda/Ayuda'
import Descarga from '../../components/Descarga/Descarga'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import HeroInfo from '../../components/HeroInfo/HeroInfo'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/Slider/Slider'

export default function Home() {
  const obtenerMonedas = async()=>{
    const resp = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false')
    localStorage.setItem('dataApi', JSON.stringify(resp.data))
  }
  useEffect(()=>{
    obtenerMonedas()
  }, [])
  return (
    <>
      <Navbar/>
      <Hero/>
      <HeroInfo/>
      <Slider/>
      <Descarga/>
      <Ayuda/>
      <Footer/>
    </>
  )
}
