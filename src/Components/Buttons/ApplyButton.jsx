import React, { useState } from 'react'
import { Cross } from '../../SVGs/cross'
import {phone} from 'phone'
import { Warning } from '../../SVGs/warning'
import { Tick } from '../../SVGs/tick'
import { CheckBox } from './checkBox'

export const ApplyButton = () => {
  const [number,setNumber] = useState('')
  const [check,setCheck] = useState(false)
  const [isPhoneValid,setPhoneValid] = useState(false)
  const [isInputFocused,setInputFocused] = useState(false)
  const onNumberChangeHander = (e)=>{
    const {value} = e.target
      if(isNaN(value)) return

      setNumber(value)
  }
  const clearNumberHandler = ()=>{
    setNumber('')
  }
  const checkBoxHandler = ()=>{
    setCheck(prev=>!prev)
  }
  const onBlurHandler = ()=>{
    const {isValid} = phone(number,{country:'IN'})
    setPhoneValid(isValid)
    setInputFocused(false)
    
  }
  return (
    <>

    <div className='row apply-button-container'>
      <div className='col-md-6 col-10'>
        <div className="d-flex bg-black rounded-xl justify-content-between input-container p-2">
            <div className="d-flex items-center input-field">
                <input type='text' className="bg-black border-0 outline-none text-white" onFocus={()=>setInputFocused(true)} onBlur={onBlurHandler}  onChange={onNumberChangeHander} placeholder="Enter Phone Number" maxLength={10} value={number}/>
                <span className="d-flex items-center"></span>
            </div>
            <span>
              {isInputFocused && number && <Cross className='px-2 cursor-pointer' onClick={clearNumberHandler}/>}
              {!isInputFocused && number && !isPhoneValid && <Warning className='px-2 cursor-pointer'/>}
              {!isInputFocused && isPhoneValid && <Tick className='px-2 cursor-pointer'/>}
            <button type="submit" className="text-center apply-button text-sm justify-between p-3" disabled={!(number && isPhoneValid && check)}>
                <span>Apply Now</span>
            </button>
            </span>
        </div>
        <CheckBox check={check} onChange={checkBoxHandler}/>
      </div>
    <div className="col-md-6 col-2 hidden"></div>
     </div>
    </>
  )
}
