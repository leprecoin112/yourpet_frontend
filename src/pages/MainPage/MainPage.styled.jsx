import styled from '@emotion/styled';
import bgMob from '../../shared/images/mainPage/pets-mob-min.png';
import bgMob2x from '../../shared/images/mainPage/pets-mob-2x-min.png';
import bgTab from '../../shared/images/mainPage/pets-tab-min.png';
import bgTab2x from '../../shared/images/mainPage/pets-tab-2x-min.png';
import bgDesk from '../../shared/images/mainPage/pets-desk-min.png';
import bgDesk2x from '../../shared/images/mainPage/pets-desk-2x-min.png';

const PageContainer = styled.div`
  padding-top: 60px;
  min-width: 320px;
  height: 600px;
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${bgMob});
  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMob2x});
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-image: url(${bgTab});
    min-width: 480px;
    height: 800px;
    background-position: right 100px;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgTab2x});
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 80px;
    min-width: 678px;
    height: 1100px;
    background-position: right 200px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: 188px;
    min-width: 1280px;
    background-image: url(${bgDesk});
    background-position: right bottom;
    opacity: 0.7;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgDesk2x});
    }
  }
`;
const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: 32px;
  font-weight: 700;
  line-height: 138%;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.black};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 68px;
    line-height: 147%;
    margin-left: 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-family: ${({ theme }) => theme.fonts.main.extrabold};
    font-size: 68px;
    font-weight: 800;
    line-height: 130%;
    margin-left: 16px;
    width: 501px;
  }
`;

export { PageContainer, PageTitle };
