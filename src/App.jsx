import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import LandingPage from './pages/landingPage/LandingPage.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        {/*  TO DO: change name of homepage to login page*/}
        <Route path='/login' element={<Homepage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
