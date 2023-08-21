import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import LandingPage from './pages/landingPage/LandingPage.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
library.add(fas, faGithub, faLinkedin);

import '../build/styles/index.css';

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
