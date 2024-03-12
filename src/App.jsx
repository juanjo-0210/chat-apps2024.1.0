import React from "react"
import { useState } from "react"
import Header from "./components/Header"
import Chat from "./components/Chat"
import "./css/style.css"





function App() {

  const [ mensaje, setMensaje ] = useState('')

  

  return (
    <>
      <div className=" flex">
        <Header />
        <Chat />
      </div>
    </>
  )
}

export default App
