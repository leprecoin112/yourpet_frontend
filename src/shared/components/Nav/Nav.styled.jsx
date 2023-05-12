import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Li = styled.li`
list-style: none;

`;
export const Link = styled(NavLink)`
color: ${({ theme }) => theme.colors.black};
text-decoration: none;
font-size: 20px;
line-height: 1.35;
font-family: ${({ theme }) => theme.fonts.main.extraBold};
&.active {
    color: ${({ theme }) => theme.colors.yellow};
}
`; 
export const NavEl = styled.nav`
display: flex;
align-items: center;
gap: 12px;
`;