import React from "react";
import Nav from "../Nav/Nav";
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";
import { Box } from "./Navigation.styled";

const Navigation = () => {
  const isLogin = false;
  return (
    <Box>
      <Nav />
      {isLogin ? <UserNav /> : <AuthNav />}
    </Box>
  );
};

export default Navigation;
