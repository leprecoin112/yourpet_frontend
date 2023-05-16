import React from 'react';
import { useSelector } from 'react-redux';
import { isUserLogin } from '../../redux/auth/auth-selectors';
import Logo from '../Logo/Logo';
import { AuthNav, Nav, UserNav } from '../Nav';
import {
  Box,
  LogoWrapper,
  NavigationWrapper,
  AuthNavWrapper,
} from './Header.styled';

const Header = () => {

  const isLogin = useSelector(isUserLogin);
  return (
    <Box>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <NavigationWrapper>
        <Nav />
      </NavigationWrapper>
      <AuthNavWrapper>{isLogin ? <UserNav /> : <AuthNav />}</AuthNavWrapper>
    </Box>
  );
};

export default Header;
