import React from 'react'

function InputUser({name, Change, value, placeholder, type, children}) {
  return (
    <div className={`${type==="text"||type==="email"?"w-full justify-center":"w-24 my-2 justify-between"} flex flex-row  items-center`}>

    <input className={`my-2 border-b-2 border-blue-200 m-1 text-center
     placeholder:text-center placeholder:text-blue-200
    ${type==="text"||type==="email"?"w-3/4 md:w-96":"w-6 h-6"} inline`}
     placeholder={placeholder} type={type} value={value} name={name} onChange={Change} autoComplete="off"/>

    <span>{children}</span>
    
    </div>
  )
}

export default InputUser