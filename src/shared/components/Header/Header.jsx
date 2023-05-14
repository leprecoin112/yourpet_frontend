import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import { Box, LogoWrapper, NavigationWrapper, AuthnavWrapper } from './Header.styled';

const Header = () => {
  return (
    <Box>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
      <AuthnavWrapper>
        <AuthNav />
      </AuthnavWrapper>
    </Box>
  );
};

export default Header;
