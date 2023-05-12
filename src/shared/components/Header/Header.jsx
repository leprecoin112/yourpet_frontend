import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { Box, LogoWrapper, NavigationWrapper } from "./Header.styled";

const Header = () => {
  return (
    <Box>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
    </Box>
  );
};

export default Header;
