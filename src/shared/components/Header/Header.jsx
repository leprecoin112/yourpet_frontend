import React from 'react';
import Logo from '../Logo/Logo';
import { AuthNav, Nav, UserNav } from '../Nav';
import { Box, NavigationWrapper, AuthNavWrapper } from './Header.styled';

const Header = () => {
  const isLogin = false;
  return (
    <Box>
      <Logo />
      <NavigationWrapper>
        <Nav />
      </NavigationWrapper>
      <AuthNavWrapper>{isLogin ? <UserNav /> : <AuthNav />}</AuthNavWrapper>
    </Box>
  );
};

export default Header;
