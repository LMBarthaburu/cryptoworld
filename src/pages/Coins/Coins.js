import React, { useEffect } from 'react'
import Ayuda from '../../components/Ayuda/Ayuda'
import Converor from '../../components/Conversor/Conversor'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Price from '../../components/Price/Price'

export default function Coins() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Navbar/>
      <Converor/>
      <Price/>
      <Ayuda/>
      <Footer/>
    </>
  )
}
