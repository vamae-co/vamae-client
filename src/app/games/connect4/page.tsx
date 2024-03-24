'use client'

import './connect4.css'
import React, { useState, useEffect } from 'react'
import config from "@/app/app.config";

export default function Connect4Page() {
  const isAuthenticated = () => {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('token');
    }
      return false;
  };
  const [isInfoOpen, setInfoOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState<string>('');
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedToken = localStorage.getItem('token')
    if (storedUsername && storedToken) {
      setUsername(storedUsername);
      setLoggedIn(true);
      setToken(storedToken);
    }
  }, []);

  //Mocked object
  const table = [
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, "PLAYER_2"],
      [null, null, null, null, "PLAYER_1", "PLAYER_1"],
      [null, null, null, "PLAYER_1", "PLAYER_1", "PLAYER_1"],
      [null, null, "PLAYER_2", "PLAYER_1", "PLAYER_1", "PLAYER_1"]
  ];

  const paintTable = () => {
      for(let x = 0; x < 7; x++) {
          for(let y = 0; y < 6; y++) {
              if(table[x][y] == "PLAYER_1") {
                  let div = document.getElementById(`${x}-${y}`);
                  if(div != null) {
                      div.style.backgroundColor = '#CD5D7D';
                  }
              }
              else if(table[x][y] == "PLAYER_2") {
                  let div = document.getElementById(`${x}-${y}`);
                  if(div != null) {
                      div.style.backgroundColor = '#F6D186';
                  }
              }
          }
      }
  }


  const toggleInfo = () => {
    setInfoOpen(!isInfoOpen);
  }
 const handlePopupInnerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  }
  return (
    <div className='connect4-background' onClick={paintTable}> {/*example usage of function*/}
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
                <div className='slot' id={'0-0'}></div>
                <div className='slot' id={'0-1'}></div>
                <div className='slot' id={'0-2'}></div>
                <div className='slot' id={'0-3'}></div>
                <div className='slot' id={'0-4'}></div>
                <div className='slot' id={'0-5'}></div>
            </div>
            <div className='column'>
                <div className='slot' id={'1-0'}></div>
                <div className='slot' id={'1-1'}></div>
                <div className='slot' id={'1-2'}></div>
                <div className='slot' id={'1-3'}></div>
                <div className='slot' id={'1-4'}></div>
                <div className='slot' id={'1-5'}></div>
            </div>
            <div className='column'>
                <div className='slot' id={'2-0'}></div>
                <div className='slot' id={'2-1'}></div>
                <div className='slot' id={'2-2'}></div>
                <div className='slot' id={'2-3'}></div>
                <div className='slot' id={'2-4'}></div>
                <div className='slot' id={'2-5'}></div>
            </div>
            <div className='column'>
                <div className='slot' id={'3-0'}></div>
                <div className='slot' id={'3-1'}></div>
                <div className='slot' id={'3-2'}></div>
                <div className='slot' id={'3-3'}></div>
                <div className='slot' id={'3-4'}></div>
                <div className='slot' id={'3-5'}></div>
            </div>
            <div className='column'>
                <div className='slot' id={'4-0'}></div>
                <div className='slot' id={'4-1'}></div>
                <div className='slot' id={'4-2'}></div>
                <div className='slot' id={'4-3'}></div>
                <div className='slot' id={'4-4'}></div>
                <div className='slot' id={'4-5'}></div>
            </div>
            <div className='column'>
                <div className='slot' id={'5-0'}></div>
                <div className='slot' id={'5-1'}></div>
                <div className='slot' id={'5-2'}></div>
                <div className='slot' id={'5-3'}></div>
                <div className='slot' id={'5-4'}></div>
                <div className='slot' id={'5-5'}></div>
            </div>
            <div className='column'>
                <div className='slot' id={'6-0'}></div>
                <div className='slot' id={'6-1'}></div>
                <div className='slot' id={'6-2'}></div>
                <div className='slot' id={'6-3'}></div>
                <div className='slot' id={'6-4'}></div>
                <div className='slot' id={'6-5'}></div>
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