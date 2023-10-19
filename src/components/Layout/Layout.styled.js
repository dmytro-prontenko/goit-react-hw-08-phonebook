import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.main`
  margin: 0 auto;
  /* padding: 0 16px; */
`;

export const StyledHeader = styled.header`
  /* display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 20px 76px;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  font-size: ${props => props.theme.fontSizes.m};
  text-align: center;
  background: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadows.boxShadowHeader};
  margin-left: -16px;
  margin-right: -16px;
  

  > nav {
    display: flex;
  } */
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