import React from 'react'
import './ayuda.css'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-router-dom'
import{RiCustomerService2Fill , RiWechatFill} from 'react-icons/ri'
import {CgFileDocument} from 'react-icons/cg'


function Ayuda() {
  return (
    <section className='container my-5 text-center text-md-start'>
      <h2 className='mb-4 fw-bold title'>¿Necesitas ayuda?</h2>
      <div className='row'>
        <div className='col-12 col-md-4 my-2'>
          <RiCustomerService2Fill className='icons'/>
          <h3 className='fw-bold'>Chat de asistencia ininterrumpido</h3>
          <p>Obtén asistencia de forma ininterrumpida por parte de los agentes de nuestro servicio de atención al cliente.</p>
          <Link to='/Chat' className='d-flex align-items-center justify-content-center justify-content-md-start link'>
            <p className='m-0'>Chatear ahora</p>
            <MdOutlineKeyboardArrowRight/>
          </Link>
        </div>
        <div className='col-12 col-md-4 my-2'>
          <RiWechatFill className='icons'/>
          <h3 className='fw-bold'>Preguntas frecuentes</h3>
          <p>Consulta las preguntas frecuentes para obtener instrucciones precisas sobre funciones específicas.</p>
          <Link to='/PregFrec' className='d-flex align-items-center justify-content-center justify-content-md-start link'>
            <p className='m-0'>Más información</p>
            <MdOutlineKeyboardArrowRight/>
          </Link>
        </div>
        <div className='col-12 col-md-4 my-2'>
          <CgFileDocument className='icons'/>
          <h3 className='fw-bold'>Blog</h3>
          <p>Mantente al día de las últimas historias y reportajes.</p>
          <Link to='/Blog' className='d-flex align-items-center justify-content-center justify-content-md-start link'>
            <p className='m-0'>Más información</p>
            <MdOutlineKeyboardArrowRight/>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Ayuda
