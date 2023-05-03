import React from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
const LoginBox = ({ setPassword, setUsername, handleSend }) => {
  return (
    <div id='login-container' className='container'>
      <TextField id='username' label='Username: ' onChange={setUsername} isRequired />
      <TextField id='password' label='Password: ' onChange={setPassword} isRequired />
      <div id='button-box'>
        <Button id='login' onPress={() => handleSend('login')}>Login</Button>
        <Button id='signup' onPress={() => handleSend('signup')}>Create Account</Button>
      </div>
    </div>
  );
};

export default LoginBox;
