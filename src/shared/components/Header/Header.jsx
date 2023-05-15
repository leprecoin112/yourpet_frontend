import React, { useState } from 'react';
import Logo from '../Logo/Logo';

import {
  Box,
  LogoWrapper,
  IconWrapper,
} from './Header.styled';
import MobileMenu from '../Nav/MobileMenu/MobileMenu';
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
      <IconWrapper onClick={toggleMenu}>
         <IconMenuHamburger />
      </IconWrapper>
      {nav && <MobileMenu onClick={toggleMenu}/>}
    </Box>
  );
};

export default Header;
