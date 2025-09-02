import React from 'react'
import './Input.css'

const Input = (props) => {
  const { size = 'medium', children, ...rest } = props

  return (
    <button className={`input ${size}`} {...rest}>
      {children}
    </button>
  )
}

export default Input
