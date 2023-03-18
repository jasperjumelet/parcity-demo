import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Buy from './pages/Buy';
/**

import NavBar from './components/NavBar';
import AboutUs from './pages/AboutUs';
import Layout from './components/Layout';
**/

function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path='/' element={<Home />} />
        <Route path='/buy' element={<Buy />} />
      </Routes>
    </>
  );
}

export default App;
