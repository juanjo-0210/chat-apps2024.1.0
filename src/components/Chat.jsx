import React from 'react'
import { useState } from 'react'




const Chat = () => {
    
    const [ text, setText] = useState('')
    const [mensaje,setMensaje] = useState([])

    // {const url = 'https://jsonplaceholder.typicode.com/comments'
    // const consultarAPI = async () => {
    //     const respuesta = await fetch(url) 
    //     const resultado = await respuesta.json()
    //     return resultado
    // }
    // const [comment,setComment] = useState([])
    // setComment(consultarAPI().then(tech => tech))
    // comment.forEach(tech => console.log(tech))}


    const handleSubmit = (e) => {
        e.preventDefault()

        

        setMensaje([...mensaje,text])
        setText('')
    }

    

  return (
    <div className='bg-sky-100 w-3/5 shadow-inner h-screen chat-box' >
        <div className=' text-box'>
           <ul>
                {mensaje.map(tech => 
                <li className='text-bubble text-right'>
                    <span className='span'>{tech}</span>
                </li>)
                }
           </ul>
            
                
                
        </div>
        <div className=' user-box'>
            
            <form 
                onSubmit={handleSubmit}
                className=''
            >
                
                <input 
                    type="text" 
                    className='rounded-xl px-2 py-1 border border-slate-200 write-box'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input 
                    type="submit" 
                    value="enviar" 
                    className=' border sender'
                />
            </form>
        </div>
    </div>
  )
}

export default Chat
