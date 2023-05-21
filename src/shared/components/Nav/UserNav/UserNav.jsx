import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getUserName } from "../../../redux/auth/auth-selectors";
import { Wrapper } from "./UserNav.styled";
import { IconUser } from "../../Icons";

const UserNav = () => {
  // const name = useSelector(getUserName);

    // const dispatch = useDispatch();
  return (
    <Wrapper>
      <IconUser />
      <span>Anna</span>  
    </Wrapper>
  );
};

export default UserNav;
