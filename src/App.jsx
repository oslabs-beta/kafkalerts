import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  );
};

export default App;
