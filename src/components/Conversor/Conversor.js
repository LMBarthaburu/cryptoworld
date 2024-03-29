import React, {useState, useEffect} from 'react'
import Listado from '../Listado/Listado'
import './conversor.css'
import axios from 'axios'

function Converor() {
  const [crypto1, selectCrypto1] = useState([])

  const obtenerMonedas = async()=>{
    const resp = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    selectCrypto1(resp.data)
  }
  useEffect(()=>{
    obtenerMonedas()
  }, [])

  const setValor =()=>{
    const valor = document.getElementById('value').value
    const nombre = document.getElementById('moneda-nombre')
    const precio = document.getElementById('moneda-precio')
    const variacion = document.getElementById('moneda-variacion')
    const found = crypto1.find(datas=> datas.id ===valor)
    nombre.innerHTML= found.id
    precio.innerText=found.current_price
    variacion.innerHTML= found.price_change_percentage_24h+ '%'
    let cantidad = document.getElementById('cantidad')
    cantidad.value= ' '
    let result = document.getElementById('resultado')
    result.innerText= 'Cantidad a recibir '
  }
  const setValor2 =()=>{
    const valor = document.getElementById('value2').value
    const nombre = document.getElementById('moneda-nombre-dos')
    const precio = document.getElementById('moneda-precio-dos')
    const variacion = document.getElementById('moneda-variacion-dos')
    const found = crypto1.find(datas=> datas.id ===valor)
    nombre.innerHTML= found.id
    precio.innerText= found.current_price
    variacion.innerHTML= found.price_change_percentage_24h + '%'
    let cantidad = document.getElementById('cantidad')
    cantidad.value= ' '
    let result = document.getElementById('resultado')
    result.innerText= 'Cantidad a recibir '
  }

  const calculo =()=>{
    let precioUno = document.getElementById('moneda-precio').textContent
    let precioDos = document.getElementById('moneda-precio-dos').textContent
    let cantidad = document.getElementById('cantidad').value
    const nombre = document.getElementById('moneda-nombre-dos').textContent
    let res = document.getElementById('resultado')
    res.innerText = ((precioUno*cantidad)/precioDos).toFixed(5) + ' ' + nombre
  }

  return (
    <section className='container mt-1 mb-3 mt-lg-4 mb-lg-5'>
      <div className='row justify-content-center align-items-center '>
        <div className='contenedor text-center text-md-start px-lg-5'>
          <h2 >Conversor de Monedas</h2>
          <h6 className='mb-4'>1- Elija las monedas que quiere comparar.<br/> 2- ingrese la cantidad a convertir.</h6>
          <div className='my-2 d-flex justify-content-between justify-content-md-center align-items-center'>
            <select className="form-select w-25" onClick={setValor} id='value'>
              <option defaultValue>Selecciona una opción</option>
              {
                crypto1.map(crypto=><Listado key={crypto.id} id={crypto.id} simbolo={crypto.symbol} nombre={crypto.name} onChange={calculo} />)
              }
            </select>
            <h5 className='m-0 mx-3 d-none d-md-block w-25 text-center' id='moneda-nombre'>Criptomoneda</h5>
            <h5 className='m-0 mx-3 w-25 text-center'>$<span id='moneda-precio'>Precio</span></h5>
            <h5 className='m-0 mx-3 d-none d-md-block w-25 text-center' id='moneda-variacion'>Variación % 24hrs</h5>
            <input type="number" className='w-50 ps-md-3 py-2 input-number text-center text-md-start' id='cantidad' onChange={calculo} placeholder='Monto' />
          </div>
          <div className='my-2 d-flex justify-content-between justify-content-md-center align-items-center'>
            <select className="form-select w-25" onClick={setValor2} id='value2'>
              <option defaultValue>Selecciona una opción</option>
              {
                crypto1.map(crypto=><Listado key={crypto.id} id={crypto.id} simbolo={crypto.symbol} onChange={calculo}/>)
              }
            </select>
            <h5 className='m-0 mx-3 d-none d-md-block w-25 text-center'id='moneda-nombre-dos'>Criptomoneda</h5>
            <h5 className='m-0 mx-3 w-25 text-center'>$<span id='moneda-precio-dos'>Precio</span></h5>
            <h5 className='m-0 mx-3 d-none d-md-block w-25 text-center' id='moneda-variacion-dos'>Variación % 24hrs</h5>
            <h5 className='w-50 ps-md-3 py-2 input-number' id='resultado'>Cantidad a recibir</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Converor