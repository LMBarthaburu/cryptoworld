import React from 'react'
import { useEffect } from 'react'
import Ayuda from '../../components/Ayuda/Ayuda'
import Descarga from '../../components/Descarga/Descarga'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import HeroInfo from '../../components/HeroInfo/HeroInfo'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/Slider/Slider'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
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
