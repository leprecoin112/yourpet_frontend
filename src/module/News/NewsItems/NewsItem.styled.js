import styled from '@emotion/styled';
import EllipsisText from 'react-ellipsis-text';

export const Item = styled.li`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: space-between;

  list-style-type: none;
  background-color: transparent;

  @media (min-width: 768px) {
    width: calc((100% - 32px) / 2);
  }
  @media (min-width: 1280px) {
    width: calc((100% - 32px * 2) / 3);
  }
`;

export const Container = styled.div`
  overflow: hidden;
  padding: 0px 0px 12px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 0 0 20px 20px;
`;

export const Line = styled.span`
  margin-bottom: 14px;
  display: block;
  min-width: 280px;
  height: 4px;
  width: 100%;
  border-radius: 40px;
  background-image: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);

  @media (min-width: 768px) {
    width: 336px;
    height: 8px;
  }
  @media (min-width: 1280px) {
    width: 394px;
  }
`;

export const Poster = styled.img`
  margin-bottom: 16px;
  width: 100%;
  min-width: 280px;
  min-height: 252px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 336px;
    height: 8px;
  }
  @media (min-width: 1280px) {
    width: 395px;
    height: 252px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  padding: 0px 12px;
  flex-grow: 2;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 243px;
  }
`;

export const NewsTitle = styled(EllipsisText)`
  margin-bottom: 15px;
  display: block;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.375;
  letter-spacing: -0.01em;
  flex-grow: 2;
`;

export const NewsBody = styled(EllipsisText)`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375;
  height: auto;

  @media (min-width: 768px) {
    height: 150px;
    display: block;
  }
  @media (min-width: 1280px) {
    height: 120px;
  }
`;

export const BottomInfoWrapper = styled.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

export const NewsDate = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const NewsLink = styled.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.375;
  color: #54adff;
  text-decoration: none;
  &:hover,
  :focus {
    color: #ffc107;
  }
`;
