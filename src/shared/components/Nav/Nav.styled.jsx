import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Li = styled.li`
  list-style: none;
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  font-size: 32px;
  line-height: 1.38;

  font-family: ${({ theme }) => theme.fonts.main.regular};
  &.active {
    color: ${({ theme }) => theme.colors.yellow};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 48px;
    line-height: 1.38;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 20px;
    line-height: 1.35;
  }
`;

export const NavEl = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 60px;
    align-items: center;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    gap: 40px;
    align-items: center;
  }
`;
