import React from 'react';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';


import { Routes , Route } from 'react-router-dom';


import './sass/main.scss';

function App() {
  return (
    <>
      <Header />
      <main>
      <SideBar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path="/error" element={<Error />} />
      </Routes>

      </main>
    </>
  );
}

export default App;
