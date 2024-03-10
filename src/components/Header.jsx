
import React from "react"
import Usuarios from "./Usuarios"


const Header = () => {
  return (
    <div className="bg-slate-200 shadow-xl w-2/5 h-screen p-2">
     <Usuarios nombre="Julian"/>
     <Usuarios nombre="Jensen Jose"/>
     <Usuarios nombre="Miguel Angel"/>
     <Usuarios nombre="Jose Antonio"/>
     <Usuarios nombre="Rafael"/>
    </div>
  )
}

export default Header
