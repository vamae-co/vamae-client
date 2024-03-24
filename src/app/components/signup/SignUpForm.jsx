import './signupform.css'
import React, { useState } from "react";
import { signUp } from "@/service/api";

export default function RegisterForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpOpen, setSignUpOpen] = useState(false);

  const toggleSignUp = () => {
    setSignUpOpen(!isSignUpOpen);
  }
 const handlePopupInnerClick = (e) => {
    e.stopPropagation();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      console.error("All fields are necessary.");
      return;
    }

      signUp({username, password}).then(
          (token) => {
              if(token) {
                  localStorage.setItem('username', username)
                  localStorage.setItem('token', token)
              }
          }
      );

      setTimeout(() => {
        window.location.reload();
      }, 800);
  };

  return (
    <div className='sign-up-window' onClick={handlePopupInnerClick}>
        <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className='input-boxes'>
            <h3>UserName</h3>
            <input name='username' onChange={(e) => setUserName(e.target.value)} required type='text' size={50}></input>
            <br></br>
            <h3>Password</h3>
            <input name='password' onChange={(e) => setPassword(e.target.value)} required type='password' size={50}></input>
            <br></br>
            <br></br>
            <button type="submit">Sign up</button>      
        </div>
        </form>           
    </div>
  )
}