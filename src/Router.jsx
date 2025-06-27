import React from 'react'

import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
export default function Router() {
  return (
     <BrowserRouter>
    

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
