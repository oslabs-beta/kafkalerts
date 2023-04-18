import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

import TextField from '../containers/components/TextField.jsx';
import Button from '../containers/components/Button.jsx';
import { usePress } from 'react-aria';

import Navbar from '../containers/NavBar';


const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorDisplay, setErrorDisplay] = useState('none');
  const navigate = useNavigate();

  const handleSend = async (endpoint) => {
    //TO DO: fix body so that html injection attacks can't happen
    try {
      console.log(username, password, endpoint);
      const response = await fetch(`http://localhost:3000/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password }),
      });
      console.log(response.status);
      if (response.status === 200) navigate('/dashboard');
      else setErrorDisplay('block');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div id='login-page' className='loginForm'>
      <TextField
        label="Username: "
        onChange={setUsername}
        isRequired />
      <TextField
        label="Password: "
        onChange={setPassword}
        isRequired />
      <Button
        onPress={() => handleSend('login')}
      >Login</Button>
      <Button
        onPress={() => handleSend('signup')}
      >Create Account</Button>

      Username: {username}
      Password: {password}

      {/* holder code, delete later */}
      <div onClick={() => navigate('/dashboard')}>GO TO DASHBOARD</div>
    </div>

  );
};

export default Login;


  // HARDCODED LOGIN COMPONENTS FROM BEFORE:
  
  // <div id='login-page'>
  //   <input
  //     type='text'
  //     placeholder='Username'
  //     onChange={(e) => {
  //       setErrorDisplay('none');
  //       setUsername(e.target.value);
  //     }}
  //   />
  //   <input
  //     type='text'
  //     placeholder='Password'
  //     onChange={(e) => {
  //       setErrorDisplay('none');
  //       setPassword(e.target.value);
  //     }}
  //   />
  //   <p style={{ display: errorDisplay }}>Username or password incorrect</p>
  //   <button onClick={() => handleSend('login')}>Log In</button>
  //   <button onClick={() => handleSend('signup')}>Create Account</button>

  //   {/* holder code, delete later */}
  //   <div onClick={() => navigate('/dashboard')}>GO TO DASHBOARD</div>
  // </div>
