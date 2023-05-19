import styled from '@emotion/styled';

const PageContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0px auto 130px auto;
 
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    gap: 32px;
    margin-top: 40px;
    max-width: 1288px;
  }
`;


export { PageContainer };