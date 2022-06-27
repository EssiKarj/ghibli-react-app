import React from 'react'
//Components
import Button from './Button'
//Images
import waveBackground from '../images/bg-wave.svg'

const MovieDisplay = ({ image, title, description, id, setMovie }) => (
  <div className='display-container'>
    <div className='totoro-bg'></div>
    <div className='display-bg'>
      <img className='wave-bg' src={waveBackground} alt='wave background' />
      <img className='movie-img' src={image} alt='movie poster' />
    </div>
    <div className='display-text'>
      <h2>{title}</h2>
      <p>{description}</p>
      <Button action='SEE MORE' id={id} setMovie={setMovie} />
    </div>
  </div>
)

export default MovieDisplay