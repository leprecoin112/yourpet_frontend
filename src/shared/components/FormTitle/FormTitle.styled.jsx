import styled from '@emotion/styled';

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.38;
  text-align: center;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.black};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 36px;
    line-height: 1.36;
    letter-spacing: 0.04em;
  }
`;
