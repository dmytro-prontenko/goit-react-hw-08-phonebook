import { StyledNavBar, StyledNavLink } from './Navbar.styled';
import logOut from '../../images/logout-svgrepo-com.svg';
import { ReactSVG } from 'react-svg';
const Navbar = () => {
  return (
    <StyledNavBar>
      <StyledNavLink to="/">HOME</StyledNavLink>
      <StyledNavLink to="/login">Sign in</StyledNavLink>
      <StyledNavLink to="/register">Sign up</StyledNavLink>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      <StyledNavLink to="*">
        <ReactSVG src={logOut}/>
      </StyledNavLink>
    </StyledNavBar>
  );
};

export default Navbar;
