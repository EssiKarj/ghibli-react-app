import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ action, id, setMovie }) => {
  const navigate = useNavigate()

  //function to handle page changes on click
  const handleClick = (action, index) => {
    if (action === 'BACK') navigate(-1)
    if (action === 'SEE MORE') {
      setMovie(index)
      navigate(`/${index}`)
    }
  }

  return <button onClick={() => handleClick(action, id)}>{action}</button>
}

export default Button