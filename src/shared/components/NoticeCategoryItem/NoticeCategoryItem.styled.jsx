import styled from '@emotion/styled';
import Btn from '../Button/Button';

export const ItemContainer = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  padding-bottom: 24px;
  stroke: #54adff;

  background-color: ${({ theme }) => theme.colors.whight};
  border: none;
  border-radius: 0px 0px 40px 40px;

  box-shadow: ${({ theme }) => theme.boxShadows.main};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 336px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 288px;
  }
`;

export const CategoryLabel = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  top: 16px;
  left: 0;
  width: 126px;
  height: 32px;
  padding-left: 17px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.36;

  background-color: ${({ theme }) => theme.colors.lightBlue};
  border: none;
  border-radius: 0px 16px 16px 0px;
`;

export const UserButtons = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 1;
`;

export const DeleteBtn = styled(Btn)`
  margin: 16px;
  stroke: black;
`;

export const ItemPicture = styled.picture`
  width: 280px;
  height: 288px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 336px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 288px;
  }
`;

export const ItemImage = styled.img`
  max-width: 100%;
  height: 100%;

  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.background};

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 50px 20px;
  width: 100%;
`;

export const InfoDescription = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfoDescriptionItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const InfoTitle = styled.h3`
  margin-bottom: 20px;

  font-size: 28px;
  font-weight: 700;
  line-height: 1.357;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.colors.blue};
`;

export const InfoText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.375;

  color: ${({ theme }) => theme.colors.blue};

  &:first-of-type {
    min-width: 90px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      min-width: 87px;
    }
  }
`;
