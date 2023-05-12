import logo from "../../images/logo.svg";
import {
  LogoContainer,
  LogoTextLeft,
  LogoTextRight,
  LogoPaw,
  LogoNavLink
} from "./Logo.styled";

const Logo = () => {
  return (
    <LogoNavLink to="/main">
      <LogoContainer>
        <LogoTextLeft>
          <use href={logo + "#logo_1"} />
        </LogoTextLeft>
        <LogoPaw>
          <use href={logo + "#logo_2"} />
        </LogoPaw>
        <LogoTextRight>
          <use href={logo + "#logo_3"} />
        </LogoTextRight>
      </LogoContainer>
    </LogoNavLink>
  );
};

export default Logo;
