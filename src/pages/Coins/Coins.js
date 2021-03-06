import React from 'react'
import Ayuda from '../../components/Ayuda/Ayuda'
import Converor from '../../components/Conversor/Conversor'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Price from '../../components/Price/Price'

export default function Coins() {
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
