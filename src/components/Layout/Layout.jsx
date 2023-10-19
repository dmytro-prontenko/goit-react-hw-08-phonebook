import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  StyledContainer,
  StyledHeader,
  StyledLogo,
  StyledLink,
  StyledNavLink,
  StyledNavBar,
} from './Layout.styled';
import { LiaPhoneSquareSolid } from 'react-icons/lia';
import { Loader } from '../Loader/Loader';
import UserMenu from 'components/UserMenu/UserMenu';
// import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledNavBar>
          <StyledNavLink to="/">HOME</StyledNavLink>
          {isLoggedIn ? (
            <>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              <UserMenu />
            </>
          ) : (
            <>
              <StyledNavLink to="/login">Sign in</StyledNavLink>
              <StyledNavLink to="/register">Sign up</StyledNavLink>
            </>
          )}
        </StyledNavBar>
      </StyledHeader>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledContainer>
  );
};

export default Layout;
