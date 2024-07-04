import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '../RootPage/components/TextField';
import Button from '../RootPage/components/Button';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [usernameRulesDisplay, setUsernameRulesDisplay] = useState(false);
  const [passwordRulesDisplay, setPasswordRulesDisplay] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const checkUsername = (username) => {
    return (
      /[^a-z0-9_\-.]/i.test(username) ||
      username.length < 4 ||
      username.length > 32
    );
  };
  const checkPassword = (password) => {
    return password.length < 8 || password.length > 32;
  };
  const handleSend = async (endpoint) => {
    let shouldIReturn;

    if (checkUsername(username)) {
      setUsernameError(
        'Must only contain letters (a-z, A-Z), numbers (0-9), dashes or underscores (no spaces), periods (.), and be between 4-32 characters long.'
      );
      shouldIReturn = true;
    } else {
      setUsernameError('');
    }
    if (checkPassword(password)) {
      setPasswordError('Must be between 8-32 characters long.');
      shouldIReturn = true;
    } else {
      setPasswordError('');
    }
    if (shouldIReturn) return;

    try {
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
          aria-describedby='username-error'
        />

        <p id='username-error'>{usernameError}</p>
        <TextField
          id='password'
          label='Password: '
          onChange={setPassword}
          isRequired
          aria-describedby='password-error'
        />
        <p id='password-error'>{passwordError}</p>
        <div id='account-buttons'>
          <Button id='login' onPress={() => handleSend('login')}>
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
