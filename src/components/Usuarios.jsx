import React from 'react'

const Usuarios = ({userDate}) => {
  return (
    <div className='
        flex py-3 
        px-1 rounded-xl 
        hover:bg-gray-100
    '>
      <img 
        className='rounded-full w-20 h-20' 
        src={userDate.data.photoURL} 
        alt="" 
      />
      <div className='mt-2 ml-3  truncate w-full'>
        <p className='font-bold text-lg w-4/5 user-name truncate box-border'>
          {userDate.data.displayName}
        </p>
        <p className='text-sm w-4/5  truncate'>
          ultimo mensaje 
        </p>
      </div>
    </div>
  )
}

export default Usuarios
