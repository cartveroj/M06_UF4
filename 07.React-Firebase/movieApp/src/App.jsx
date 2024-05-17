/* eslint-disable no-unused-vars */
// import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes, useLocation,  } from 'react-router-dom';
import Login from './pages/Login';
import MovieAdd from './pages/MoviesAdd';
import MovieList from './pages/MoviesList';

import { useState } from 'react';

const App = () => {

  const [user, setUser] = useState([]);

  return (
    <>
    <Router>
       
        <Routes>
          <Route exact path="/" element={<Login setUser={setUser}/>} />
          <Route exact path="/movies" element={<Home user={user}/>} />
          <Route exact path="/movies/list" element={<MovieList />} />
          <Route exact path="/movies/add" element={<MovieAdd />} />
        </Routes>
    </Router>
    </>
    
  );
};

export default App;
