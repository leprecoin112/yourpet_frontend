import { NavLink, useLocation } from "react-router-dom";
import { Wrapper, Button } from "./AuthNav.styled";

const navItems = [
  { href: "/login", text: "Log IN" },
  { href: "/register", text: "Registration" },
];

const AuthNav = () => {
  const location = useLocation();

  return (
    <Wrapper>
      {navItems.map(
        ({ href, text }) =>
          href !== location.pathname && (
            <Button className={NavLink} href={href}>
              {text}
            </Button>
          )
      )}
    </Wrapper>
  );
};

export default AuthNav;
