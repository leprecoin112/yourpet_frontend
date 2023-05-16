import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import { AuthNav } from '../Nav';
import MobileMenu from '../Nav/MobileMenu/MobileMenu';
import DesktopMenu from '../Nav/DesktopMenu/DesktopMenu';

import { Box, LogoWrapper, AuthNavWrapper, IconWrapper, DesktopWrapper } from './Header.styled';
import { IconMenuHamburger } from '../Icons';

const Header = () => {
  const [nav, setNav] = useState(false);

  const toggleMenu = () => {
    setNav(!nav);
  };

  return (
    <Box>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <AuthNavWrapper>
        <AuthNav />
      </AuthNavWrapper>
      <IconWrapper onClick={toggleMenu}>
        <IconMenuHamburger />
      </IconWrapper>
      {nav && <MobileMenu onClick={toggleMenu} />}
      <DesktopWrapper>
        <DesktopMenu />
      </DesktopWrapper>
    </Box>
  );
};

export default Header;
