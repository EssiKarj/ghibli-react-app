import React, { useState, useEffect } from 'react'
import MovieDisplay from '../components/MovieDisplay'

const Overview = () => {
  const [movieData, setMovieData] = useState({})

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://ghibliapi.herokuapp.com/films')
      const data = await response.json()
      setMovieData(data.slice(0, 5))
    }

    getData()
  }, [])


  return (
    <div>
      {movieData.length ?
        movieData.map((movie, index) => {
          return <MovieDisplay
            key={index}
            image={movie.image}
            title={movie.title}
            description={movie.description}
            id={index}
          />
        })
        :
        <h2>Loading...</h2>
      }
    </div>
  )
}

export default Overview