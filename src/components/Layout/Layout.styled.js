import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.main`
  margin: 0 auto;
`;

export const StyledHeader = styled.header`
`;

export const StyledNavBar = styled.nav`
  background-color: #023047;
  justify-content: center;
  align-items: center;
  height: 8vh;
  display: flex;
  gap: 25px;
  padding-left:50px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 5px;
  border-radius: 4px;
  text-decoration: none;
  color: #FFB703;

  &.active {
    background-color: #FFB703;
    color: #023047;
  }

  &:hover:not(.active) {
    background-color: lightblue;
    color: #023047;
  }
`;