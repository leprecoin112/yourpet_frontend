import styled from "@emotion/styled";

export const AddWrapper = styled.div`
padding: 20px 20px;
width: 100%;

background-color: ${({ theme }) => theme.colors.white};
box-shadow: ${({ theme }) => theme.boxShadows.main};
border-radius: 20px;
@media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  width: 704px;
  padding: 30px;
  text-aling: center;
}
`;