import React from 'react'
import { Header } from './Header'
import './style.css'
import { Body } from './Body'
export const TopIntro = () => {
  return (
    <div className='top-intro-container'>
        <div className="video-background">
        <video autoPlay muted loop playsInline id="myVideo" >
            <source src="https://www.uni.cards/videos/nxt_wave_bg.mp4" type="video/mp4"/>
        </video>
        <div className="content">
          <Header />
          <Body />
          
        </div>
    </div>
        
        
    </div>
  )
}

