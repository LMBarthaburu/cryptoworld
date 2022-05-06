import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'

export default function ButtonLogIn(props) {
  return (
    <>
      <Link className="navbar-btn" to={props.link}><button className='btn-edit'>{props.titulo}</button></Link> 
    </>
  )
}
