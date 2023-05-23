import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 24px;
  margin-bottom: 75px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    margin-top: 40px;
    margin-bottom: 200px;
  }

  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-top: 60px;
  }
`;
