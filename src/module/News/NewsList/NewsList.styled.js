import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;

    column-gap: 31px;
    row-gap: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 60px;
  }
`;
