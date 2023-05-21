import styled from '@emotion/styled';

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

export const UserBtns = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 12px;
  right: 12px;
  z-index: 1;
  &.active,&: hover;
  &.active,
  &:hover,
  &:focus {
    transition: all ${({ theme }) => theme.duration.main}
      ${({ theme }) => theme.transition.main};

    stroke: ${({ theme }) => theme.colors.white};
  }
`;

export const Btns = styled.button`
display:flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;

  cursor: pointer;
  width: 40px;
  height: 40px;

  background: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 40px;
  border: none;

  &.active,
  &:hover,
  &:focus {
    transition: all ${({ theme }) => theme.duration.main}
      ${({ theme }) => theme.transition.main};
    background: ${({ theme }) => theme.colors.gradientBlue};
    stroke: ${({ theme }) => theme.colors.white};
  }
  &:not(:last-child) {
    margin-bottom: 16px;
    }
  }
`;

export const Filter = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  top: 248px;
  margin: 0 8px;
  z-index: 1;
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 24px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0 12px;
  }
`;

export const FilterBtn = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2px 4px;
  cursor: pointer;

  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;

  width: 80px;
  height: 28px;

  background: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 16px;
  border: none;

  &.active,
  &:hover,
  &:focus {
    transition: all ${({ theme }) => theme.duration.main}
      ${({ theme }) => theme.transition.main};
    background: ${({ theme }) => theme.colors.gradientBlue};
    stroke: ${({ theme }) => theme.colors.white};
  }
`;

export const ItemPicture = styled.picture`
  width: 280px;
  height: 288px;
  text-align: center;
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
  background-size: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  width: 100%;
`;

export const InfoTitle = styled.h3`
  margin-bottom: 20px;

  font-size: 24px;
  font-weight: 700;
  line-height: 1.38;

  color: ${({ theme }) => theme.colors.black};
`;
