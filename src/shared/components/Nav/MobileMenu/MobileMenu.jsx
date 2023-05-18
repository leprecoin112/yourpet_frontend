import { AuthNav, Nav, UserNav } from '../';
import Logo from '../../Logo';
import {
  MobileWrapper,
  LogoWrapper,
  MobileIconWrapper,
  MainWrapper,
  NavigationWrapper,
  AuthNavWrapper,
  SecondWrapper,
} from '../../Nav/MobileMenu/MobileMenu.styled';

import { IconCrossSmall } from '../../Icons';

const MobileMenu = ({ onClick }) => {
  const isLoggedIn = false;

  return (
    <MobileWrapper>
      <MainWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <MobileIconWrapper onClick={() => onClick()}>
        <IconCrossSmall />
      </MobileIconWrapper>
      </MainWrapper>
      <SecondWrapper>
      <NavigationWrapper>
        <Nav />
      </NavigationWrapper>
      <AuthNavWrapper>{isLoggedIn ? <UserNav /> : <AuthNav />}</AuthNavWrapper>
      </SecondWrapper>
    </MobileWrapper>
  );
};

export default MobileMenu;
