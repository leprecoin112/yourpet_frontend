import { NavLink } from "react-router-dom";

import logoSmall1x from '../../images/logo/logoSmall@1x-min.png';
import logoSmall2x from '../../images/logo/logoSmall@2x-min.png';
import logoBig1x from '../../images/logo/logoBig@1x-min.png';
import logoBig2x from '../../images/logo/logoBig@2x-min.png';

import { StyledLogo } from "./Logo.styled";

const Logo = () => {
  return (
    <NavLink to="/main">
      <picture>
        <source
            srcSet={`${logoBig1x} 1x, ${logoBig2x} 2x`}
            media="(min-width: 768px)"
        />
        <source
            srcSet={`${logoSmall1x} 1x, ${logoSmall2x} 2x`}
            media="(max-width: 767px)"
        />
        <StyledLogo src={logoSmall1x} alt="Logo" />
      </picture>
    </NavLink>
  );
};

export default Logo;
