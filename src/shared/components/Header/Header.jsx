import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import { AuthNav, UserNav, Nav } from '../Nav';
import MobileMenu from '../MobileMenu/MobileMenu';
import Container from '../Container/Container';

import { IconWrapper, Wrapper, NavWrapper, UserWrapper } from './Header.styled';
import { IconMenuHamburger } from '../Icons';

const Header = () => {
  const isLoggedIn = false;
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <Container>
      <Wrapper>
        <Logo />
        <NavWrapper>
          <Nav />
        </NavWrapper>
        <UserWrapper>{isLoggedIn ? <UserNav /> : <AuthNav />}</UserWrapper>
        <IconWrapper onClick={toggleMenu}>
          <IconMenuHamburger />
        </IconWrapper>
      </Wrapper>
      {isMenu && <MobileMenu onClick={toggleMenu} />}
    </Container>
  );
};

export default Header;
