import React from 'react'

const Button = ({ action, index }) => {
  const handleClick = (action, index) => {
    if (action === 'BACK') return
    if (action === 'SEE MORE') return
  }

  return (
    <button onClick={() => handleClick(action, index)}>{action}</button>
  )
}

export default Button