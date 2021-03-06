import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import { UserProvider } from './utils/ApiContext';
import { Routes , Route } from 'react-router-dom';

import './sass/main.scss';

function App() {
  return (
    <>
      <Header />
      <main>
      <SideBar />
      <UserProvider>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      </UserProvider>
      </main>
    </>
  );
}

export default App;
