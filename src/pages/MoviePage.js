import React from 'react'
//Components
import Button from '../components/Button'

const MoviePage = ({ movieData, movie }) => (
  <div className='movie-page-container'>
    <img src={movieData[movie].movie_banner} alt='Movie banner'></img>
    <h1>{movieData[movie].title}</h1>
    <h3>Director: {movieData[movie].director}</h3>
    <h3>Release Date: {movieData[movie].release_date}</h3>
    <Button action='BACK' />
  </div>
)

export default MoviePage