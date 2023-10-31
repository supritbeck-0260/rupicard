import React, { useState } from 'react'
import './style.css'
import { CheckBox } from '../../Buttons/checkBox'
export const  FloatingButton= () => {
    const [check,setCheck] = useState(true)
  const [showButton,setShowButton] = useState(false)
  const onClickHandler = ()=>{
    setShowButton(prev=> !prev)
  }
  const [number,setNumber] = useState('')
  const onNumberChangeHander = (e)=>{
    const {value} = e.target
    if(isNaN(value)) return
    setNumber(value)
  }
  return (
    <div className='floating-button-container p-4 d-flex justify-content-center flex-column'>
       {showButton && <div class="flex items-center input-box">
            <input type='text' class="text-lg py-3" onChange={onNumberChangeHander} placeholder="Enter your phone number" autocomplete="off" value={number} maxLength={10}/>
            <span class="w-6"></span>
        </div>}
            <button onClick={onClickHandler} className='p-3 d-flex justify-content-between' >
                Apply now
                <img src="https://www.uni.cards/images/right_arrow.svg" alt="arrow" />
             </button>
            {showButton && <CheckBox check={check} onClick={()=>setCheck(prev=>!prev)} className='text-light text-size-10 fw-bold'/>}
    </div>
  )
}
