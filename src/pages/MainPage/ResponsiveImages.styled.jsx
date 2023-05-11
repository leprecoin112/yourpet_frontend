import styled from '@emotion/styled';

const PetFirst = styled.picture`
  position: absolute;
  top: 55px;
  left: -10px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 0;
    left: -10px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 194px;
    left: -190px;
  }
`;
const PetSecond = styled.picture`
  position: absolute;
  top: -60px;
  right: 0;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: -110px;
    right: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 90;
    left: 207;
  }
`;
const PetThird = styled.picture`
  position: absolute;
  top: 205px;
  right: 0;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 435px;
    right: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    bottom: 0;
  }
`;

export { PetFirst, PetSecond, PetThird };
