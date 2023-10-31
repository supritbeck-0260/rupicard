import React from 'react'
import { LeftBody } from './LeftBody'
import { RightBody } from './RightBody'
import './style.css'
export const Body = () => {
  return (
    <div className='body-container row'>
        <div className='col-md-7 col-12'>
             <LeftBody />
         </div>
        <div className='col-md-5 col-12'>
             <RightBody/>
        </div>
    </div>
  )
}
