import LogInForm from 'components/LoginForm/LogInForm';
import React from 'react';
import { StyledBlurWrapper, StyledLogin } from './Login.styled';

const Login = () => {
  return (
    <StyledLogin>
      <StyledBlurWrapper />
      <LogInForm />
    </StyledLogin>
  );
};

export default Login;
