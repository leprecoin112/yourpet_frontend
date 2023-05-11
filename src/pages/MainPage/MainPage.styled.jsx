import styled from '@emotion/styled';
import bgMob from '../../shared/images/mainPage/bg-mob-min.png';
import bgTab from '../../shared/images/mainPage/bg-tab-min.png';
import bgDesk from '../../shared/images/mainPage/bg-desk-min.png';
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 60px;
  background-image: url(${bgMob});
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 80px;
    background-image: url(${bgTab});
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    background-image: url(${bgDesk});
    padding-top: 30px;
    flex-direction: row;
  }
`;
const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: 32px;
  line-height: 44px;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 68px;
    line-height: 100px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-family: ${({ theme }) => theme.fonts.main.extrabold};
    font-size: 68px;
    line-height: 130%;
    margin-top: 188px;
    width: 501px;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 320px;
  height: 100vh;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 768px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 70%;
  }
`;
export { PageContainer, PageTitle, ImageWrapper };
