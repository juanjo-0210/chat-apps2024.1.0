import React from "react"
import { useState } from "react"
import Header from "./components/Header"
import Chat from "./components/Chat"
import "./css/style.css"




function App() {

  
  const [mensajes, setMensajes] = useState([])
  const [user, setUser] = useState(null)
  console.log(mensajes)
  

  return (
    <>
      {/* <button onClick={handleGoogleLogin}>Iniciar sesion con Google</button> */}
      <div className=" flex">
        <Header 
          mensajes={mensajes}
          user={user}
        />
        <Chat 
          mensajes={mensajes}
          setMensajes={setMensajes}
          user={user}
          setUser={setUser}
        />
      </div>
    </>
  )
}

export default App
