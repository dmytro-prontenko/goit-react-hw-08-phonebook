import { useEffect } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Global } from 'styles/Global';

import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import PageContacts from 'pages/PageContacts/PageContacts';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import Register from 'pages/Register/Register';

import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from 'redux/auth/operations';
import { selectIsRefresh } from 'redux/auth/selectors';
import { PrivateRoute } from './PrivateRoute';

import ScrollToTop from 'react-scroll-up';
import { ReactComponent as IconUp } from '../images/up-arrow-svgrepo-com.svg';
import '../index.css';
import { StyledUpSpan } from './ContactsList/ContactsList.styled';
import { Loader } from './Loader/Loader';

const App = () => {
  const isRefresh = useSelector(selectIsRefresh);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);


  return isRefresh ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <PageContacts />
              </PrivateRoute>
            }
          />

          <Route path="index.html" element={<Navigate to="/" />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <ScrollToTop
        showUnder={10}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 35,
          background: '#023047',
          width: '35px',
          height: '35px',
          padding: '8px',
          boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2)',
        }}
      >
        <StyledUpSpan>
          <IconUp />
        </StyledUpSpan>
      </ScrollToTop>
      <Global />
    </>
  );
};

export default App;
