import React from 'react'

const Chat = () => {
    

  return (
    <div className='bg-sky-100 w-3/5 shadow-inner h-screen flex items-end'>
        <div className='px-2 mb-3 w-full'>
            <form >
                <input 
                    type="text" 
                    className='inline-block w-4/5 rounded-xl px-2 py-1'
                />
                <input 
                    type="submit" 
                    value="enviar" 
                    className='inline-block w-1/5 border '
                />
            </form>
        </div>
    </div>
  )
}

export default Chat
