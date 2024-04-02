import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Header from './components/nav/Header';
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
)

function App({routes}) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
