import styled from "@emotion/styled";

const PetsNoData = styled.div`
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  min-width: 280px;
  padding: 20px 8px 24px 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 608px;
    padding: 60px 75px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 820px;
  }
`;

const PetsListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export {PetsNoData, PetsListWrapper};