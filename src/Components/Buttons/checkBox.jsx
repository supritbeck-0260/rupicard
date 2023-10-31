import React from 'react'

export const CheckBox = ({check,onChange, className}) => {
  return (
    <>
    <div className="d-flex concent-box items-center py-4 px-2">
          <input type="checkbox" checked={check} id="consent" onChange={onChange}/>
          <label htmlFor="consent" className={`consent ${className || 'text-balck'}  cursor-pointer px-1 `}>
            You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.
            </label>
        </div>
    </>
  )
}
