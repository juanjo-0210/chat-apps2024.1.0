import React from 'react'
import { useState, useEffect } from 'react'
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import {auth,app} from '../firebase/firebase'
import {doc, setDoc, getFirestore, getDoc, onSnapshot, collection, addDoc, orderBy, query, serverTimestamp} from 'firebase/firestore'


const db = getFirestore(app)



const Chat = ({mensajes,setMensajes,user,setUser}) => {
    //const [user, setUser] = useState(null)
    //const [mensajes, setMensajes] = useState([])
    const [newMensaje, setNewMensaje] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    useEffect(() => {
        const consulta = query(collection(db,"mensajes"), orderBy("timestamp"))
        const unsubscribe = onSnapshot(consulta, snapshot => {
            setMensajes(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()             
            })))
        })
        return unsubscribe
    }, [])

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }else{
                setUser(null)
            }
        })
    },[])

    const sendMensaje = async () => {
        await addDoc(collection(db,"mensajes"), {
            uid: user.uid,
            photoURL: user.photoURL,
            displayName: user.displayName,
            text: newMensaje,
            timestamp: serverTimestamp()
        })

        setNewMensaje("")
    }

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider()
    
        try {
            
            const resultado = await signInWithPopup(auth,provider)
    
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='bg-sky-100 w-3/5 shadow-inner h-screen chat-box' >
        { user ? (
            <>
            <div className=' text-box'>
            <ul>
                    {mensajes.map(msg => (
                        <li 
                            
                            key={msg.id}
                            className={`text-bubble  ${msg.data.uid === user.uid ? 'text-right items-start' : 'items-end text-left'}`}
                        >
                            
                            <img src={msg.data.photoURL} className={`w-10 h-10 rounded-full inline-block ${msg.data.uid === user.uid ? 'hidden' : ''}`}/>

                            <span className={`span text-left text-wrap overflow-clip ${msg.data.uid === user.uid ? 'self' : 'other'} `} >  
                            
                            {/* solucionar el overflow y text wrap white-space wrap */}
                            
                            {msg.data.text}
                            </span>
                        </li>

                    ))}
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
                        value={newMensaje}
                        onChange={(e) => setNewMensaje(e.target.value)}
                    />
                    <input 
                        type="submit" 
                        value="enviar" 
                        className=' border sender'
                        onClick={sendMensaje}
                    />
                </form>
            </div>
            </>
        ):
            <button onClick={handleGoogleLogin}>Login con google</button>
        }
    </div>

  );

}


export default Chat
