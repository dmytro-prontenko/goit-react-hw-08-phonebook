
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginThunk } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { StyledButton, StyledError, StyledForm, StyledInput, StyledLink } from './LoginForm.styled';

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => {
        toast.success(`Welcome, ${res.user.name}!`);

        navigate(location.state?.from ?? '/');
      })
      .catch(() => toast.error('Something went wrong! Try again!'));
  };
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        type="email"
        placeholder="Email"
        {...register('email', {
          required: { value: true, message: 'This field is required' },
          minLength: { value: 6, message: 'Minimum 10 characters' },
          maxLength: { value: 20, message: 'Maximum 20 characters' },
          pattern: /^\S+@\S+$/i,
        })}
      />
      {errors.email && <StyledError>{errors.email.message}</StyledError>}
      <StyledInput
        type="password"
        placeholder="Password"
        {...register('password', {
          required: true,
          minLength: 10,
          maxLength: 16,
        })}
      />
      {errors.password && (
        <StyledError>This field is required. Length 6-16 symbols</StyledError>
      )}
      <p>
        Don't have an account? <StyledLink>Sign up here</StyledLink>
      </p>
      <StyledButton type="submit">Log in</StyledButton>
    </StyledForm>
  );
};

export default LoginForm;

