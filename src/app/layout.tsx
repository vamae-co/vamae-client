'use client'
import { Inter } from "next/font/google"
import './layout.css'
import Image from 'next/image'
import avatar from "./avatar.png"
import React, { useState } from 'react'
import SignUpForm from './components/signup/SignUpForm'
import LoginForm from './components/login/LoginForm'


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
            <a href="/news"><button>News</button></a>
            <a href="/indev"><button>Currency</button></a>
            <a href="/indev"><button>About us</button></a>
            <a href="/indev"><button>Support us</button></a>
            <a href="/indev"><button>Contacts</button></a>
        </div>         
        <div className='sign-in'>
          <button  className={'sign-in-button'} onClick={toggleRegister}>Sign up</button>
              {isRegisterOpen && (
                <div className='register' onClick={toggleRegister}>
                  <SignUpForm/>
                </div>
              )}
              <br></br>
            <button className={'sign-in-button'} onClick={toggleLogin}>Log in</button>
              {isLoginOpen && (
                <div className='register' onClick={toggleLogin}>
                  <LoginForm/>
                </div>
              )}
        </div>       
        </header>
        <div className={'wrapper'}>
            <div className={'profile'}>
              <div className={'avatar'}>
                <Image src={avatar} width={200} height={200} alt="Avatar"/>
              </div>
              <span>&#128100;UserName</span><br></br>
              <span>&#x1F4B0;Money</span>
              <div className={"sidepanel-left"}>
                  <a href="/indev" className={'profilebutton'}>&#x1F91D;Friends(&#x1f6e0;)</a>
                  <a href="/indev" className={'profilebutton'}>&#x1F4C8;Statistic(&#x1f6e0;)</a>
                  <a href="/indev" className={'profilebutton'}>&#x1F4E5;Inbox(&#x1f6e0;)</a>    
              </div>                                     
            </div>
            <div className={'main'}>
              {children}           
            </div>
            <div className={'games'}>
            <div className={'sidepanel-right'}>
              <div className={'game'}>
                  <div className={'game-name'}><a href="/indev"><span>Poker</span></a></div>
                  <div className={'game-desc'}><span>Poker is a card game that involves betting with chips and keeping a straight face.</span></div>
              </div>
              <div className={'game'}>
                  <div className={'game-name'}><a href="/games/connect4"><span>Connect-4</span></a></div>
                  <div className={'game-desc'}><span>Connect-4 is a game in which the players choose a color and then take turns dropping colored tokens into a six-row, seven-column vertically suspended grid.</span></div>
              </div>
              <div className={'game'}>
                  <div className={'game-name'}><a href="/indev"><span>GameName</span></a></div>
                  <div className={'game-desc'}><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur suscipit excepturi qui repellat cupiditate odit odio temporibus molestias, atque repudiandae et repellendus necessitatibus reprehenderit animi quas distinctio! Amet, quos eum?</span></div>
              </div>
            </div>
            </div>
        </div>      
      </body>
    </html>
  );
}
