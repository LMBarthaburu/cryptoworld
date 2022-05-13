import React from 'react'

function Listado(props) {
  return (
    <>
      <option value={props.id}>{props.simbolo}</option>
    </>
  )
}

export default Listado