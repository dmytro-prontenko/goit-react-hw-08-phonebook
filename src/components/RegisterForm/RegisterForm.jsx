import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);
  console.log('errors', errors);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        type="text"
        placeholder="Name"
        {...register('name', {
          required: {value: true, message: "This field is required"},
          minLength: { value: 6, message: `Name should contains min 6 characters` },

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
          minLength: {value: 6, message: "Minimum 6 characters" },
          maxLength: { value: 20, message: "Maximum 20 characters" },
        })}
      />
      {errors.password && <StyledError>{errors.password.message}</StyledError>}
      <p>
        Already have an account? <StyledLink>Sign in here</StyledLink>
      </p>


      <StyledButton type="submit">Log in</StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 20px;
  justify-items: center;

  width: 30vw;
  height: 45vh;
  margin: 30px auto;
  padding: 25px;

  border-radius: 30px 0 30px 0;
  background-color: #023047;
  color: #ffb703;
`;

export const StyledInput = styled.input`
  width: 80%;
  border: none;
  border-bottom: 1px solid #ffb703;
  background-color: transparent;
  color: #ffb703;

  &:focus {
    outline: 0 transparent solid;
  }
`;

export const StyledButton = styled.button`
  background-color: #ffb703;
  color: #023047;
  border: none;
  border-radius: 6px;
  width: 35%;
  height: 40px;
  font-size:1.2rem;
`;

export const StyledLink = styled(Link)`
  color:#ffb703;
`

export const StyledError = styled.p`
  font-size:0.5rem;
  margin: 0;
`