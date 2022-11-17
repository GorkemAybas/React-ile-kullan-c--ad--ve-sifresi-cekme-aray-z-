import React from 'react'
import "./button.css"
function Button({onClick}) {
  return (
    
    <button type="button" className="btn btn-dark" onClick={onClick}>Giriş Yap</button>
  )
}

export default Button
