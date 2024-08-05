import React, { useEffect, useState } from 'react'
import ChatMessages from './ChatMessages'
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import {db} from "../config/firebase";

export default function Chat( { user }) {
    const [messages,setMessages] = useState([]);
    const [text,setText] =useState (" ");
    const messagesRef = collection(db, "messages");   

    const handleSubmit =  async () => {
    const date = new Date();
    await addDoc(messagesRef,{
        text,
        email: user.email,
        logo: user.photoUrl,
        name:user.displayName,
        date,
    })
    setText(" ")
    setTimeout(() => document.querySelector('#copyright').scrollIntoView({behavior: 'smooth'}),0.5 )
     };

     useEffect (() => {
        const unsubcribe = onSnapshot(messagesRef, (quertSnapshot) => {
        const newMessages = quertSnapshot.docs 
        .map((doc) => doc.data())
        .sort((a,b) => a.data - b.data);
        setMessages(newMessages)
        setTimeout(() => document.querySelector('#copyright').scrollIntoView({behavior: 'smooth'}),0.5 )
        })
        return () => unsubcribe();
     },[]);

  return (
    <div>
      <div className='justify-content-center'>
        <h1 className='text-primary'>Chat App</h1>
      </div>
      <div className='row mt-4'>
         <div className='col-xl-4 col-lg-4 col-sm-3 col-2'></div>
         <div className='col-xl-4 col-lg-4 col-sm-6 col-8 chat-message'>
        {
            messages.map(messages =>(
                <ChatMessages {...messages}
                user={user} />
            ))}
            <div className='d-flex mt-2'>
            <input type="text" className='form-control' value={text} 
             onChange={(e) => setText(e.target.value)}/>
             <button  className=' btn btn-secondary ms-3' onClick={handleSubmit}>Send</button>
            </div>
            <div id='copyright' className='mt-3'>
                Copyrights reserved kaliRaj
            </div>
         </div>
      </div>
    </div>
  )
}
