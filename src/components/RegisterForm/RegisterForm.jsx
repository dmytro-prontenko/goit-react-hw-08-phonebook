import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerThunk } from 'redux/auth/operations';
import { StyledButton, StyledError, StyledForm, StyledInput, StyledLink } from './RegisterForm.styled';
import AnimatedPage from 'components/AnimatedPage';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = data => {
    dispatch(registerThunk(data))
      .unwrap()
      .then(res => {
        toast.success(`Welcome, ${res.user.name}!`);

        navigate('/contacts');
      })
      .catch(() => toast.error('Something went wrong! Try again!'));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <AnimatedPage>
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        type="text"
        placeholder="Name"
        {...register('name', {
          required: {value: true, message: "This field is required"},
          minLength: { value: 4, message: `Name should contains min 4 characters` },
        })}
      />
      {errors.name && <StyledError>{errors.name.message}</StyledError>}
      <StyledInput
        type="email"
        placeholder="Email"
        {...register('email', {
          required: {value: true, message: "This field is required"},
          minLength: {value: 6, message: "Minimum 6 characters" },
          maxLength: { value: 20, message: "Maximum 20 characters" },
          pattern: /^\S+@\S+$/i,
        })}
      />
      {errors.email && <StyledError>{errors.email.message}</StyledError>}
      <StyledInput
        type="password"
        placeholder="Password"
        {...register('password', {
          required: {value: true, message: "This field is required"},
          minLength: {value: 10, message: "Minimum 10 characters" },
          maxLength: { value: 20, message: "Maximum 20 characters" },
        })}
      />
      {errors.password && <StyledError>{errors.password.message}</StyledError>}
      <p>
        Already have an account? <StyledLink>Sign in here</StyledLink>
      </p>


      <StyledButton type="submit">Register</StyledButton>
    </StyledForm>
    </AnimatedPage>
  );
};

export default RegisterForm;

