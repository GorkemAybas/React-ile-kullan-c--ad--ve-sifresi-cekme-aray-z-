import React from 'react'
import "./input.css"
 function Input({type,placeHolder,onChange}) {
  return (

      <input type="text" className="form-control" id="exampleInputEmail1" 
    type={type} placeHolder={placeHolder} onChange={onChange}/> 
    
    
  )
}
export default Input
