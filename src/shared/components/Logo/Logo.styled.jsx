import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LogoNavLink = styled(NavLink)`
  display: flex;
`;

export const LogoContainer = styled.div`
  display: flex;
  position: relative;
`;

export const LogoTextLeft = styled.svg`
  width: 61px;
  height: 19px;
  fill: ${({ theme }) => theme.colors.black};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 86px;
    height: 25px;
  }
`;

export const LogoTextRight = styled.svg`
  width: 45px;
  height: 19px;
  margin-left: 10px;
  fill: ${({ theme }) => theme.colors.black};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 61px;
    height: 25px;
    margin-left: 15px;
  }
`;

export const LogoPaw = styled.svg`
  top: 0;
  left: 0;
  width: 17px;
  height: 17px;
  margin-left: 14px;
  margin-top: 2px;
  fill: ${({ theme }) => theme.colors.yellow};
  position: absolute;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 20px;
    margin-top: 3px;
    width: 24px;
    height: 23px;
  }
`;
