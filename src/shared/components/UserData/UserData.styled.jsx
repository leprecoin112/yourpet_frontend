import styled from "@emotion/styled";

const Title = styled.h2`
  display: block;
  min-width: 280px;
  font-size: 20px;
  
  margin: 40px auto 18px auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 608px;
    line-height: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 395px;
  }
`;

const UserDataWrapper = styled.div`
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
    width: 704px;
    padding: 20px 76px 21px 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 395px;
    padding: 20px;
  }
`;






export {Title, UserDataWrapper,  };