import RegisterForm from 'components/RegisterForm/RegisterForm';
import { StyledBlurWrapper, StyledRegister } from './Register.styled';

const Register = () => {
  return (
    <StyledRegister>
      <StyledBlurWrapper/>
      <RegisterForm />
    </StyledRegister>
  );
};

export default Register;
