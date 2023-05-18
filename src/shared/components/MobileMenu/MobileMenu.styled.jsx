import styled from '@emotion/styled';

export const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100wh;
  height: 100%;
  z-index: 10;
  padding-top: 20px;

  background-color: ${({ theme }) => theme.colors.background};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 20px;
  }
`;

export const LogoWrapper = styled.div``;

export const MobileIconWrapper = styled.div`
  stroke: ${({ theme }) => theme.colors.yellow};
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const MainWrapper = styled.div`
  gap: 145px;
  display: flex;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 523px;
    display: flex;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  padding: 0;
  flex-direction: column-reverse;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    margin-top: 100px;
    gap: 60px;
    flex-direction: column;
  }
`;

export const AuthNavWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-top: 41px;
`;
