import React from 'react'

const Mensaje = () => {
    const msg = [
        "Buenos dias",
        "Como estas",
        "Me alegro",
        "Bien gracias a dios"
    ]
    const url = 'https://jsonplaceholder.typicode.com/comments'

    const consultarAPI = async () => {
        const respuesta = await fetch(url) 
        const resultado = await respuesta.json()
        resultado.forEach(tech => console.log(tech));
        
    }
            // <li className='text-bubble text-right'>
            //     <span className='span'>{tech.body}</span>
            // </li>

        
    
    
  return (
    <>
        <ul>
        {consultarAPI()}
        </ul>
    </>
  )
}

export default Mensaje
