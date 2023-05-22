import { AuthNav, Nav, UserNav } from '../Nav';
import Logo from '../Logo/Logo';
import { useAuth } from '../../hooks/useAuth';
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
  const isLoggedIn = useAuth();

  return (
    <MobileWrapper>
      <MainWrapper>
        <LogoWrapper onClick={() => onClick()}>
          <Logo />
        </LogoWrapper>
        <MobileIconWrapper onClick={() => onClick()}>
          <IconCrossBig />
        </MobileIconWrapper>
      </MainWrapper>
      <SecondWrapper>
        <NavigationWrapper onClick={() => onClick()}>
          <Nav />
        </NavigationWrapper>
        <AuthNavWrapper onClick={() => onClick()}>
          {isLoggedIn ? <UserNav /> : <AuthNav />}
        </AuthNavWrapper>
      </SecondWrapper>
    </MobileWrapper>
  );
};

export default MobileMenu;
