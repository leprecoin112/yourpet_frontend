import styled from '@emotion/styled';

export const Box = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const LogoWrapper = styled.div`
  flex: 0 0 auto;
`;

export const IconWrapper = styled.div`
  stroke: ${({ theme }) => theme.colors.yellow};
  cursor: pointer;
  
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;    
  }
`;