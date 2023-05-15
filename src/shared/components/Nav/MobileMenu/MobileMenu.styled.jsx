import styled from '@emotion/styled';

export const Box = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  heigth: 100%;
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.background};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
    justify-content: space-betwwen;
  }
`;

export const NavigationWrapper = styled.div`
  flex: 1 1 auto;
`;
//margin-left: 150px;

export const AuthNavWrapper = styled.div``;

export const IconWpapper = styled.div`
  stroke: ${({ theme }) => theme.colors.yellow};
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;
