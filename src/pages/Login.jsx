import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      This is the login page
      <div
        onClick={() => {
          // console.log('click');
          navigate('/dashboard');
        }}
      >
        GO TO DASHBOARD
      </div>
    </div>
  );
};

export default Login;
