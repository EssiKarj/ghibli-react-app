import React, { useEffect } from 'react'
import MovieDisplay from '../components/MovieDisplay'

const Overview = ({ movieData, setMovieData, setMovie }) => {
  //API request to execute on first render of the page and store first fove movies to movieData state
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://ghibliapi.herokuapp.com/films')
      const data = await response.json()
      setMovieData(data.slice(0, 5))
    }

    getData()
  }, [])

  return (
    <div className='main-container'>
      {movieData.length ?
        movieData.map((movie, index) => {
          return <MovieDisplay
            key={index}
            image={movie.image}
            title={movie.title}
            description={movie.description}
            id={index}
            setMovie={setMovie}
          />
        })
        :
        <h2>Loading...</h2>
      }
    </div>
  )
}

export default Overview