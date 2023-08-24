import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage/LoginPage.jsx';
import DashboardPage from './pages/dashboardPage/DashboardPage.jsx';
import LandingPage from './pages/landingPage/LandingPage.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
library.add(fas, faGithub, faLinkedin);

import '../build/styles/index.css';
import RootPage from './pages/RootPage/RootPage.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootPage />}>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='login' element={<LoginPage />} />
        </Route>
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
