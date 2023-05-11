import logo from "../../images/logo.svg";
import { LogoContainer, SvgText1, SvgText2, SvgPaw } from "./Logo.styled";

const Logo = () => {
  return (
    <LogoNavLink to="/">
      <LogoContainer>
        <SvgText1>
          <use href={logo + "#logo_1"} />
        </SvgText1>
        <SvgPaw>
          <use href={logo + "#logo_2"} />
        </SvgPaw>
        <SvgText2>
          <use href={logo + "#logo_3"} />
        </SvgText2>
      </LogoContainer>
      //{" "}
    </LogoNavLink>
  );
};

export default Logo;
