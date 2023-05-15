import { AuthNav, Nav, UserNav } from '../';
import Logo from '../../Logo';
import {
  Box,
  NavigationWrapper,
  AuthNavWrapper,
  IconWpapper,
} from '../../Nav/MobileMenu/MobileMenu.styled';
import { IconCrossSmall } from '../../Icons';

const MobileMenu = ({ onClick }) => {
  const isLoggedIn = false;

  return (
    <Box>
        <Logo />
        <IconWpapper onClick={() => onClick()}>
          <IconCrossSmall />
        </IconWpapper>
        <NavigationWrapper>
          <Nav />
        </NavigationWrapper>
        <AuthNavWrapper>
          {isLoggedIn ? <UserNav /> : <AuthNav />}
        </AuthNavWrapper>
    </Box>
  );
};

export default MobileMenu;
