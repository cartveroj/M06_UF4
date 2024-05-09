// import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Login from './pages/Login';
import MovieAdd from './pages/MoviesAdd';
import MovieList from './pages/MoviesList';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/movies" element={<Home />} />
          <Route exact path="/movies/list" element={<MovieList />} />
          <Route exact path="/movies/add" element={<MovieAdd />} />
        </Routes>
    </Router>
  );
};

export default App;
