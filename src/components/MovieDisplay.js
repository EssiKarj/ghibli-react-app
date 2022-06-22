import React from 'react'
import Button from './Button'

const MovieDisplay = ({ image, title, description, index }) => {

  return (
    <div className='display-container'>
      <div className='display-bg'>
        <div className='display-img'><img src={image} alt=''></img></div>
      </div>
      <div className='display-text'>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button action='SEE MORE' index={index} />
      </div>
    </div>
  )
}

export default MovieDisplay