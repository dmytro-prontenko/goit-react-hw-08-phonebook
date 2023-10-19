import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import {
  StyledContainer,
  StyledHeader,
  StyledNavBar,
  StyledNavLink
} from './Layout.styled';
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
