import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Overview from './pages/Overview';
import MoviePage from './pages/MoviePage';

function App() {
  const [movieData, setMovieData] = useState({})
  const [movie, setMovie] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Overview movieData={movieData} setMovieData={setMovieData} setMovie={setMovie} />} />
        <Route path='/:id' element={<MoviePage movieData={movieData} movie={movie} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
