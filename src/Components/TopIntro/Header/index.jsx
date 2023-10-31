import React from 'react'
import { Logo } from '../../../SVGs/logo'
import { NavButton } from '../../Buttons'
import './style.css'
export const Header = () => {
  return (
    <div className='header-container px-2'>
        <Logo className='logo cursor-pointer'/>
        <NavButton 
        text='Uni Paychek' 
        url = 'https://paychek.uni.club/'
        />
    </div>
  )
}
