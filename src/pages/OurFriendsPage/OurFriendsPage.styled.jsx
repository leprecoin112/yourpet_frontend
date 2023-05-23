import styled from '@emotion/styled';

export const Title = styled.h1`
  margin-top: 40px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 48px;
    margin-top: 80px;
  }
`;
