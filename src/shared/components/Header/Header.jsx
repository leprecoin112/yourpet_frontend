import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import { AuthNav, UserNav, Nav } from '../Nav';
import MobileMenu from '../MobileMenu/MobileMenu';
import Container from '../Container/Container';
import { isAuth } from '../../redux/auth/selectors';

import { IconWrapper, Wrapper, NavWrapper, UserWrapper } from './Header.styled';
import { IconMenuHamburger } from '../Icons';
import { useSelector } from 'react-redux';

const Header = () => {
  const isLogin = useSelector(isAuth);
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
        <UserWrapper>{isLogin ? <UserNav /> : <AuthNav />}</UserWrapper>
        <IconWrapper onClick={toggleMenu}>
          <IconMenuHamburger />
        </IconWrapper>
      </Wrapper>
      {isMenu && <MobileMenu onClick={toggleMenu} />}
    </Container>
  );
};

export default Header;
