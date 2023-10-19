import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 10px;
  justify-items: center;

  width: 25vw;
  min-height: 40vh;
  margin: 20px auto;
  padding: 15px;

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
  width: 50%;
  height: 40px;
  font-size: 0.9rem;
  margin-top: 25px;
`;

export const StyledLink = styled(Link)`
  color: #ffb703;
`;
export const StyledError = styled.p`
  font-size: 0.5rem;
  margin: 0;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  gap: 5px;
  width: 100%;
`;

export const StyledContactTitle = styled.h2`
  align-self: center;
`;
