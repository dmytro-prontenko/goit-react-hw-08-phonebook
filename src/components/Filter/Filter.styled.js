import styled from "styled-components";

export const StyledFilter = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 10px;
  justify-items: center;

  width: 30vw;
  height: 12vh;
  margin: 20px auto;
  padding: 15px;

  border-radius: 30px 0 30px 0;
  background-color: #023047;
  color: #ffb703;
`;

export const StyledInput = styled.input`
  width: 90%;
  border: none;
  border-bottom: 1px solid #ffb703;
  background-color: transparent;
  color: #ffb703;

  &:focus {
    outline: 0 transparent solid;
  }
`;