import styled from '@emotion/styled';

export const ItemContainer = styled.div`
  display: flex;
`;

export const Item = styled.div`
  flex-direction: column;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  padding: 15px;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  align-items: center;
  text-align: center;
  color: #54adff;
  margin: 16px 0;
`;

export const Field = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  color: #111111;

  &:not(first-child) {
    margin-top: 12px;
  }

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Link = styled.a`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  color: #111111;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 19px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 22px;
  }
  &:hover,
  :focus {
    color: #54adff;
  }
`;

export const LogoWrapper = styled.div`
  margin-right: 16px;

  @media screen and (min-width: 1280px) {
    margin-right: 20px;
  }
`;

export const Logo = styled.img`
  width: 100px;
  min-height: 68px;

  @media screen and (min-width: 768px) {
    width: 124px;
    min-height: 88px;
  }

  @media screen and (min-width: 1280px) {
    width: 146px;
    min-height: 104px;
  }
`;

export const TimeInfo = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  color: #111111;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 19px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
