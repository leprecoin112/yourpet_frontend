import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Li = styled.li`
  list-style: none;
`;
export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  font-size: 20px;
  line-height: 1.35;

  font-family: ${({ theme }) => theme.fonts.main.regular};
  &.active {
    color: ${({ theme }) => theme.colors.yellow};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const NavEl = styled.nav`
  

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
    gap: 40px;
  }
`;
