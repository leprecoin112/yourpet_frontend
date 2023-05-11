import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LogoNavLink = styled(NavLink)`
  display: flex;
`;

export const LogoContainer = styled.div`
  display: flex;
  position: relative;
`;

export const SvgText1 = styled.svg`
  width: 86px;
  height: 25px;
  fill: #303030;
  @media screen and (max-width: 480px) {
    width: 61px;
    height: 19px;
  }
`;

export const SvgText2 = styled.svg`
  width: 61px;
  height: 25px;
  fill: #303030;
  margin-left: 15px;
  @media screen and (max-width: 480px) {
    width: 45px;
    height: 19px;
    margin-left: 10px;
  }
`;

export const SvgPaw = styled.svg`
  width: 24px;
  height: 23px;
  fill: #ffc107;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 20px;
  margin-top: 3px;
  @media screen and (max-width: 480px) {
    width: 17px;
    height: 17px;
    margin-left: 14px;
    margin-top: 2px;
  }
`;
