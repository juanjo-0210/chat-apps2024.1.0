
import React from "react"
import Usuarios from "./Usuarios"
import {auth} from '../firebase/firebase'

const Header = ({mensajes,user}) => {
  console.log(user)
  console.log(mensajes)
  
  return (
    <div className="bg-slate-50 shadow-xl w-2/5 h-screen overflow-hidden overflow-y-scroll p-2">
      { mensajes.map(userDate => (
        
        <Usuarios
          key={userDate.id}
          userDate={userDate}
         /> 
      ))
      }
     
     
    </div>
  )
}

export default Header
