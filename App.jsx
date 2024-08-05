import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Chat from  './components/Chat'
import { signInWithPopup } from 'firebase/auth';
import {auth,provider} from "./config/firebase";

function App() {
  const [user,setUser] = useState(null);
  
  const handleSignIn = () => {
  signInWithPopup(auth,provider)
  .then((result) => setUser(result._tokenResponse))
  .catch((error) => console.log(error));
  }
  return(
   <div className='App'>
    {user ? 
    <Chat user={user} />
    : 
       <div className='p-5 text-center'>
        <div>
          <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="logo"
          width={400}
          height={400}
          className='pr-2'
          style={{borderRadius: 200}}
           />
        </div>
        <div>
          <button 
          className='btn btn-primary'
          style={{marginTop: "50px"}}
          onClick={handleSignIn}
          >
           Login
          </button>
        </div>
   </div>
}
</div>
  )
};

export default App;

