import styled from '@emotion/styled';

export const IconWrapper = styled.div`
  stroke: ${({ theme }) => theme.colors.yellow};
  cursor: pointer;
  margin-left: 2px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  padding-top: 24px;
  align-items: center;
  margin: auto;
  justify-content: space-between;
`;

export const NavWrapper = styled.div`
  display: none;
  letter-spacing: 0.04em;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
    margin-left: 159px;
  }
`;

export const UserWrapper = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;
