import styled from '@emotion/styled';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 44px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 80px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: 45px;
  }
`;

export { PageContainer };