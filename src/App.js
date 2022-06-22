import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Overview from './pages/Overview';
//import MoviePage from './pages/MoviePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
