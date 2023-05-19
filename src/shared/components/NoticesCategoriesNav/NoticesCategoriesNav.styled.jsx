import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

export const NavIsLogged = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const NavNotLogged = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 12px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-right: 12px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  margin-bottom: 8px;
  text-decoration: none;

  font-size: 14px;
  line-height: 1.36;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.blue};

  background-color: ${({ theme }) => theme.colors.lightBlue};
  border: none;
  border-radius: 40px;

  transition: ${({ theme }) => theme.transition.main};

  &:not(:last-of-type) {
    margin-right: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    &:last-of-type {
      margin-right: 12px;
    }
  }

  &.active,
  &:hover,
  &:focus {
    transition: all ${({ theme }) => theme.duration.main}
      ${({ theme }) => theme.transition.main};
    background: ${({ theme }) => theme.colors.gradientBlue};
    color: ${({ theme }) => theme.colors.white};
  }
`;
