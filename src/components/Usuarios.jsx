import React from 'react'

const Usuarios = (props) => {
  return (
    <div className='
         flex py-3 
        px-1 rounded-xl 
        hover:bg-slate-50
    '>
      <img 
        className='rounded-full' 
        src="https://via.placeholder.com/60x60" 
        alt="" 
      />
      <span className='mt-2 ml-3'>{props.nombre}</span>
    </div>
  )
}

export default Usuarios
