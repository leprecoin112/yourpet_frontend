import styled from '@emotion/styled';
const Wrapper = styled.section`
  padding-top: 40px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 80px;
  }
`;

export { Wrapper };
