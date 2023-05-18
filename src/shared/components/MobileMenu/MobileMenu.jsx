import { AuthNav, Nav, UserNav } from '../Nav';
import Logo from '../Logo/Logo';
import {
  MobileWrapper,
  LogoWrapper,
  MobileIconWrapper,
  MainWrapper,
  NavigationWrapper,
  AuthNavWrapper,
  SecondWrapper,
} from './MobileMenu.styled';

import { IconCrossBig } from '../Icons';

const MobileMenu = ({ onClick }) => {
  const isLoggedIn = false;

  return (
    <MobileWrapper>
      <MainWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <MobileIconWrapper onClick={() => onClick()}>
          <IconCrossBig />
        </MobileIconWrapper>
      </MainWrapper>
      <SecondWrapper>
        <NavigationWrapper>
          <Nav />
        </NavigationWrapper>
        <AuthNavWrapper>
          {isLoggedIn ? <UserNav /> : <AuthNav />}
        </AuthNavWrapper>
      </SecondWrapper>
    </MobileWrapper>
  );
};

export default MobileMenu;
