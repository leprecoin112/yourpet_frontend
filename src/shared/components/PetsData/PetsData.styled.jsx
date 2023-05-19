import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const TitleAndBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 280px;
  margin: 40px auto 18px auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 608px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 820px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
`;

const AddPetBtn = styled(NavLink)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  max-width: 130px;
  padding: 8px 16px;
  font-family: ${({ theme }) => theme.fonts.main.regular};
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.blue};
  stroke: #FEF9F9;
  border-radius: 40px;
  font-weight: 700;
  color: #FEF9F9;
  margin-right: 6px;

  &:hover {
    cursor: pointer;
    background: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%);
  }
`;

const PetsDataWrapper = styled.div`
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




export {TitleAndBtnWrapper, Title, PetsDataWrapper, AddPetBtn };