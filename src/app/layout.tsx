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
        <div className={'logo'}>
          <h1>VAMAEcologo</h1>
        </div>    
        <div className={'header-buttons'}>
            <button>Main</button>
            <button>Currency</button>
            <button>About us</button>
            <button>Support us</button>
            <button>Contacts</button>
        </div>         
        <div className='sign-in'>
          <button  className={'sign-in-button'} onClick={toggleRegister}>Sign up</button>
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
              <br></br>
            <button className={'sign-in-button'} onClick={toggleLogin}>Log in</button>
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
              <h2>&#128100;UserName</h2>
              <h2>&#x1F4B0;Money</h2>
              <div className={"sidepanel-left"}>
                <nav>
                  <a href="#" className={'profilebutton'}>&#x1F91D;Friends</a>
                  <a href="#" className={'profilebutton'}>&#x1F4C8;Statistic</a>
                  <a href="#" className={'profilebutton'}>&#x1F4E5;Inbox</a> 
                </nav>     
              </div>                                     
            </div>
            <div className={'main'}>
              {children}           
            </div>
            <div className={'games'}>
            <div className={'sidepanel-right'}>
              <div className={'game'}>
                  <div className={'game-name'}><p>Poker</p></div>
                  <div className={'game-desc'}><p>Poker is a card game that involves betting with chips and keeping a straight face.</p></div>
              </div>
              <div className={'game'}>
                  <div className={'game-name'}><p>Connect-4</p></div>
                  <div className={'game-desc'}><p>Connect-4 is a game in which the players choose a color and then take turns dropping colored tokens into a six-row, seven-column vertically suspended grid.</p></div>
              </div>
              <div className={'game'}>
                  <div className={'game-name'}><p>GameName</p></div>
                  <div className={'game-desc'}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur suscipit excepturi qui repellat cupiditate odit odio temporibus molestias, atque repudiandae et repellendus necessitatibus reprehenderit animi quas distinctio! Amet, quos eum?</p></div>
              </div>
            </div>
            </div>
        </div>      
      </body>
    </html>
  );
}
