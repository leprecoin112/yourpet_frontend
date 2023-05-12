import styled from '@emotion/styled';

const PetFirst = styled.picture`
  position: absolute;
  top: 55px;
  left: -30px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 0;
    left: -40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 220px;
    left: -190px;
  }
`;
const PetSecond = styled.picture`
  position: absolute;
  top: -60px;
  right: 5px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: -110px;
    right: -260px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 90;
    left: 90px;
  }
`;
const PetThird = styled.picture`
  position: absolute;
  top: 205px;
  right: 0;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 450px;
    right: -250px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    bottom: 0;
    right: 0;
  }
`;

export { PetFirst, PetSecond, PetThird };
