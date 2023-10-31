import React from 'react'
export const NavButton = ({text,url}) => {
  return (
    <span className='button-container cursor-pointer'>
        <a href={url} target='_blank'> {text} </a>
       
    </span>
  )
}
