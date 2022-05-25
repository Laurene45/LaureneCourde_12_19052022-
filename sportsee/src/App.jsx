import React from 'react';
// import { Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import LateralBar from './components/LateralBar';

import './sass/main.scss';

/*
 * Creates app and routes
 * @returns { HTMLElement }
 */


function App() {
  return (
    <>
    <Header />
    <LateralBar />
    
      
    </>
    
  );
}

export default App;







/* Commentaire pour moi
import LateralBar from './components/lateral-bar/LateralBar';
import Dashboard from './views/dashboard/Dashboard';
import Home from './views/home/Home';
      <main>
      <LateralBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/:id' element={<Dashboard />} />
      </Routes>
      </main>*/