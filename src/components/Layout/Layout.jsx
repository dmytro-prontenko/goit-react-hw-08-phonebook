import { Outlet } from 'react-router-dom';
import { LayoutWrapper, WrapperOutlet } from './Layout.styled';
import Navbar from 'components/Navbar/Navbar';

const Layout = () => {
  return (
    <LayoutWrapper>
      <Navbar />
      <WrapperOutlet>
        <Outlet />
      </WrapperOutlet>
    </LayoutWrapper>
  );
};

export default Layout;
