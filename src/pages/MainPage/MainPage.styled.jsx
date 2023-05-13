import styled from '@emotion/styled';
import bgMob from '../../shared/images/mainPage/pets-mob-min.png';
import bgMob2x from '../../shared/images/mainPage/pets-mob-2x-min.png';
import bgTab from '../../shared/images/mainPage/pets-tab-min.png';
import bgTab2x from '../../shared/images/mainPage/pets-tab-2x-min.png';
import bgDesk from '../../shared/images/mainPage/pets-desk-min.png';
import bgDesk2x from '../../shared/images/mainPage/pets-desk-2x-min.png';

const PageContainer = styled.div`
  padding-top: 60px;
  width: 100%;
  height: 100vh;
  background-position: left 100px;
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
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgTab2x});
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 80px;
    background-position: left 400px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    background-position: 330px -50px;
    padding-top: 188px;
    background-image: url(${bgDesk});
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
