'use client'
import { Inter } from "next/font/google"
import './layout.css'
import Image from 'next/image'
import avatar from "./avatar.png"
import React, { useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const toggleRegister = () => {
    setRegisterOpen(!isRegisterOpen);
  }

  const toggleLogin = () => {
    setLoginOpen(!isLoginOpen);
  }
 const handlePopupInnerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  }
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <header>
          <div className='sign-in'>
          <button onClick={toggleRegister}>Register</button>
              {isRegisterOpen && (
                <div className='register' onClick={toggleRegister}>
                  <div className='register-popup' onClick={handlePopupInnerClick}>
                      <h2>Registration</h2>
                      <div className='input-boxes'>
                          <h3>Email</h3>
                          <input required type='email'size={50}></input>
                          <br></br>
                          <h3>Password</h3>
                          <input required type='password' size={50}></input>
                          <br></br>
                          <br></br>
                          <button type='submit'>Register user</button>      
                      </div>           
                  </div>
                </div>
              )}
              <button onClick={toggleLogin}>Login</button>
              {isLoginOpen && (
                <div className='register' onClick={toggleLogin}>
                  <div className='register-popup' onClick={handlePopupInnerClick}>
                      <h2>Login</h2>
                      <div className='input-boxes'>
                          <h3>Email</h3>
                          <input required type='email'size={50}></input>
                          <br></br>
                          <h3>Password</h3>
                          <input required type='password' size={50}></input>
                          <br></br>
                          <br></br>
                          <button type='submit'>Log in</button>      
                      </div>           
                  </div>
                </div>
              )}
          </div>         
        </header>
        <div className={'wrapper'}>
            <div className={'profile'}>
              <div className={'avatar'}>
                <Image src={avatar} width={200} height={200} alt="Avatar"/>
              </div>             
            </div>
            <div className={'main'}>{children}           
            </div>
            <div className={'games'}></div>
        </div>      
      </body>
    </html>
  );
}
