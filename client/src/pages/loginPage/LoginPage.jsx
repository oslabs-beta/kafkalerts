import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '../RootPage/components/TextField';
import Button from '../RootPage/components/Button';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    console.log(username);
  }, [username]);
  const handleSend = async (endpoint) => {
    if (!username || !password) {
      return;
    }
    try {
      console.log(username, password, endpoint);
      console.log(process.env.NODE_ENV);
      const url =
        process.env.NODE_ENV === 'development'
          ? `http://localhost:3000/api/${endpoint}`
          : `/api/${endpoint}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password }),
      });
      console.log(response);
      // if (response.status === 200) navigate('/dashboard');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main id='login-page' className='pages'>
      <div id='login-container'>
        <TextField
          id='username'
          label='Username: '
          onChange={setUsername}
          isRequired
        />
        <TextField
          id='password'
          label='Password: '
          onChange={setPassword}
          isRequired
        />
        <div id='account-buttons'>
          <Button id='login' onPress={() => handleSend('login')} disabled>
            Login
          </Button>
          <Button id='signup' onPress={() => handleSend('signup')}>
            Sign up
          </Button>
        </div>
        <hr />
        <Button id='demo-button' onClick={() => navigate('/dashboard')}>
          See a Demo!
        </Button>
      </div>
    </main>
  );
};
export default LoginPage;
