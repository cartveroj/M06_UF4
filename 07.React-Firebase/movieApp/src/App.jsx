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
  //declaramos un hook para almacenar el nombre que introduce el usario al ahcer login
  //lo declaramos de manera global para poder compartirlo con otros componentes
  const [user, setUser] = useState([]);
  // definicion del enrutado de la aplicacion
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
