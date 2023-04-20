import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import Dashboard from './pages/Dashboard.jsx';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
};

export default App;
