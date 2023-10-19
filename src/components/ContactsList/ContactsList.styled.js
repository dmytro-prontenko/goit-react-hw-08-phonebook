import { styled } from 'styled-components';

export const StyledContactsList = styled.ul`
width: 80%;`

export const StyledContactLi = styled.li`
  list-style: none;

  /* margin-top: 10px; */
  display: flex;
  text-align: center;
  align-items:flex-end;
`;

export const StyledSpan = styled.span`
  margin-right: auto;
  /* width: 300px; */
`;
export const StyledBtnDelete = styled.button`
background-color:transparent;
border:none;
  /* width: 70px;
  padding: 4px 0;
  background-color: ${props => props.theme.colors.btnDelete}; */

`;
export const StyledUpSpan = styled.div`
  font-size: 26px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  place-items:center;
  :hover,
  :focus {
    color: ${props => props.theme.colors.black};
    font-weight: ${props => props.theme.fontWeights.bold};
    transform: scale(1.05);
  }
`;

export const StyledContacts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 10px;
  justify-items: center;

  width: 35vw;
  height: auto;
  margin: 30px auto;
  padding: 35px;

  border-radius: 30px 0 30px 0;
  background-color: #023047;
  color: #ffb703;

  box-shadow: ${props => props.theme.shadows.boxShadowForm};

`;