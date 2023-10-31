import React from 'react'
import { Star } from '../../../../SVGs/star'
import './style.css'
import { ApplyButton } from '../../../Buttons'
export const LeftBody = () => {
  return (
    <div className='left-body-container'>
        <h1 className='body-text'>
            <span>
            <strong>NX Wave.</strong> The next-gen credit card for those who love rewards.
            </span>
        </h1>
    <div >
        <p className='fw-bold'>1% Cashback
           <Star className='mx-1'/>
            5x Rewards 
            <Star className='mx-1'/> 
            Zero Forex Markup
        </p>
    </div>

    <ApplyButton />

    </div>
  )
}
