'use client'

import './connect4.css'
import React, { useState } from 'react'

export default function Connect4Page() {
  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };
  const [isInfoOpen, setInfoOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(isAuthenticated());

  const toggleInfo = () => {
    setInfoOpen(!isInfoOpen);
  }
 const handlePopupInnerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  }
  return (
    <div className='connect4-background'>
      {loggedIn && (
          <>
          <div onClick={toggleInfo} className='info'>
              {isInfoOpen && (
                <div className='info-wrapper' onClick={toggleInfo}>
                  <div className='info-popup' onClick={handlePopupInnerClick}>
                        <h1>How to play?</h1>
                        <h2>
                          <ol>
                            <li>On your turn, select column in which you want to drop checker.</li>
                            <li>Play alternates until one player gets four checkers of his color in a row. The four can be horizontal, vertical or diagonal.</li>
                            <li>If you’re the first player to get four of your checkers in a row, you win the game!</li>    
                          </ol>
                        </h2>                       
                  </div>
                </div>
              )}
        <div  className='dot'></div>
        <p>I</p>
      </div>
      <div className='piece-place'>
        <div className='circle-big'>
            <div className='circle-small'></div>
        </div>
        <div className='circle-big'>
            <div className='circle-small'></div>
        </div>
        <div className='circle-big'>
            <div className='circle-small'></div>
        </div>
        <div className='circle-big'>
            <div className='circle-small'></div>
        </div>
        <div className='circle-big'>
            <div className='circle-small'></div>
        </div>
        <div className='circle-big'>
            <div className='circle-small'></div>
        </div>
        <div className='circle-big'>
            <div className='circle-small'></div>
        </div>
      </div>
      
      <div className='board'>
        <div className='innerboard'>
            <div className='column'>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
            </div>
            <div className='column'>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
            </div>
            <div className='column'>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
            </div>
            <div className='column'>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
            </div>
            <div className='column'>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
            </div>
            <div className='column'>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
            </div>
            <div className='column'>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
            </div>
        </div>   
      </div>
          </>
      )}
      {!loggedIn && (
        <h1>You need to log in!</h1>
      )}
    </div>
  )
}