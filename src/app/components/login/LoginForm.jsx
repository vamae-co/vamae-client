"use client";

import './loginform.css'
import React, { useState} from "react";
import config from '@/app/app.config.js'

export default function RegisterForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

 const handlePopupInnerClick = (e) => e.stopPropagation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      console.error("All fields are necessary.");
      return;
    }

    fetch(
        config.uri + "/auth/authenticate", {
          method: "POST",
          body: JSON.stringify({
            username,
            password,
          })
        }
      )
      .then ((response)=>response.json())
      .then ((body)=>{
          localStorage.setItem('username', username)
          localStorage.setItem('token', body.token)
          localStorage.getItem('username')
          localStorage.getItem('token')
      })
      .catch((error)=>console.log("User login failed", error));

      setTimeout(() => {
        window.location.reload();
      }, 300);
  };

  return (
    <div className='log-in-window' onClick={handlePopupInnerClick}>
        <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <div className='input-boxes'>
            <h3>UserName</h3>
            <input name='username' onChange={(e) => setUserName(e.target.value)} required type='text' size={50}></input>
            <br></br>
            <h3>Password</h3>
            <input name='password' onChange={(e) => setPassword(e.target.value)} required type='password' size={50}></input>
            <br></br>
            <br></br>
            <button type="submit">Log In</button>
        </div>
        </form>           
    </div>
  )
}