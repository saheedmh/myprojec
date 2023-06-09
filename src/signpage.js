import './style/loginpage.css';
import './style/signup.css';
import Homepage from './homepage';
import {useRef, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';

function Signuppage(){
  const name = useRef();
  const email = useRef();
  const number =useRef();
  const password = useRef();
  const [displayHome, setDisplayHome] = useState(false)
const localSignUp=localStorage.getItem("login")
  useEffect(()=>{
    if(localSignUp){
      setDisplayHome(true)
    }
    }
  )

  
  const navigate = useNavigate();
  navigate('/')
  const handleClick=()=>{
    if(name.current.value&&email.current.value&&number.current.value&&password.current.value){
      localStorage.setItem("name",name.current.value)
      localStorage.setItem("email",email.current.value)
      localStorage.setItem("number", number.current.value)
      localStorage.setItem('password',password.current.value)
      localStorage.setItem('login',email.current.value)
   
      alert("account create successfully");
    }
  
  }

    return ( 
      <div>
    
      <div className="signup-container">
        
        <form action="" className="signup-form">
           
           <h1>Create an account</h1>
           <p>connect with your friends today</p>
           <input type="text"  placeholder='Enter YOur Username' ref={name}/><br />
           
           <input type="text"  placeholder='Enter YOur Email' className='email' ref={email}/><br />
          
           
           <input className='number' type="number" placeholder='Enter Your Phone number' ref={number}/><br />
           
           <input type="password" name="" id="" placeholder='Enter Your Password' className='pass' ref={password}/><br></br>
           
  
           <button className='btn' onClick={handleClick}>login</button><br></br>
         <span>or With</span><br /><br /><br />

         <button>login with facebook</button><br></br><br />
         <button id='btn-id'>login with google</button><br></br>
         <p>Already have an account? <Link className="link" onClick={() => { navigate('/') }}>Login</Link></p>
        </form>
        </div>   
      );

        </div>
     );

}
 
export default Signuppage ;