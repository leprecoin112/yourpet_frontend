import React from "react";
import Logo from '../../Logo';
import { AuthNav, Nav, UserNav } from '../';
import {Box, LogoWrapper, NavigationWrapper, AuthNavWrapper} from './DesktopMenu.styled';

const DesktopMenu = () => {
    const isLoggedIn = false;
  return (
    <Box>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <NavigationWrapper>
        <Nav />
      </NavigationWrapper>
      <AuthNavWrapper>{isLoggedIn ? <UserNav /> : <AuthNav />}</AuthNavWrapper>
    </Box>
  );
};

export default DesktopMenu;