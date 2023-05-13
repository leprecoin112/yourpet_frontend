import styled from '@emotion/styled';
import bgMob from '../../shared/images/mainPage/pets-mob-min.png';
import bgMobPows from '../../shared/images/background/bg-mobile.1x.png.png';

import bgMob2x from '../../shared/images/mainPage/pets-mob-2x-min.png';
import bgTab from '../../shared/images/mainPage/pets-tab-min.png';
import bgTab2x from '../../shared/images/mainPage/pets-tab-2x-min.png';
import bgDesk from '../../shared/images/mainPage/pets-desk-min.png';
import bgDesk2x from '../../shared/images/mainPage/pets-desk-2x-min.png';
import petFirstDesk from '../../shared/images/mainPage/1pet-desk-min.png';
import petFirstXDesk from '../../shared/images/mainPage/1pet-desk-2х-min.png';
import petFirstTab from '../../shared/images/mainPage/1pet-tab-min.png';
import petFirstXTab from '../../shared/images/mainPage/1pet-tab-2x-min.png';
import petFirstMob from '../../shared/images/mainPage/1pet-mob-min.png';
import petFirstXMob from '../../shared/images/mainPage/1pet-mob-2x-min.png';
import petSecondDesk from '../../shared/images/mainPage/2pet-desk-min.png';
import petSecondXDesk from '../../shared/images/mainPage/2pet-desk-2х-min.png';
import petSecondTab from '../../shared/images/mainPage/2pet-tab-min.png';
import petSecondXTab from '../../shared/images/mainPage/2pet-tab-2x-min.png';
import petSecondMob from '../../shared/images/mainPage/2pet-mob-min.png';
import petSecondXMob from '../../shared/images/mainPage/2pet-mob-2x-min.png';
import petThirdDesk from '../../shared/images/mainPage/3pet-desk-min.png';
import petThirdXDesk from '../../shared/images/mainPage/3pet-desk-2х-min.png';
import petThirdTab from '../../shared/images/mainPage/3pet-tab-min.png';
import petThirdXTab from '../../shared/images/mainPage/3pet-tab-2x-min.png';
import petThirdMob from '../../shared/images/mainPage/3pet-mob-min.png';
import petThirdXMob from '../../shared/images/mainPage/3pet-mob-2x-min.png';

// const MainPageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   padding-top: 60px;
//   background-image: url(${bgMobPows});
// `;
// const MainPageTitle = styled.h1`
//   font-family: ${({ theme }) => theme.fonts.main.bold};
//   font-weight: 700;
//   font-size: 32px;
//   line-height: 138%;
//   color: ${({ theme }) => theme.colors.black};
// `;
// const ImageWrapper = styled.div`
//   width: 320px;
//   height: 393px;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-image: url(${bgMob});
//   @media screen and (min-device-pixel-ratio: 2),
//     (min-resolution: 192dpi),
//     (min-resolution: 2dppx) {
//     background-image: url(${bgMob2x});
//   }
//   @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     min-width: 321px;
//     background-size: contain;
//     background-image: url(${bgTab});
//   }
// `;

// const MainPageContainer = styled.div`
//   position: relative;
//   margin-left: auto;
//   margin-right: auto;
//   background-repeat: no-repeat;
//   background-size: cover;

//   @media screen and (min-width: 280px) {
//     width: 320px;
//     min-height: 601px;
//     background-image: url('${bgMobPows}');
//   }

//   @media screen and (min-width: 768px) {
//     width: 768px;
//     min-height: 1193px;
//     background-image: url('${bgMobPows}');
//   }

//   @media screen and (min-width: 1280px) {
//     width: 1280px;
//     min-height: 768px;
//     background-image: url('${bgMobPows}');
//   }

//   @media screen and (min-width: 1600px) {
//     width: 1600px;
//     height: 950px;
//   }
// `;

// const MainPageTitle = styled.h1`
//   position: absolute;
//   width: 280px;
//   height: 88px;
//   left: 20px;
//   top: 108px;
//   font-family: 'Manrope';
//   font-style: normal;
//   font-weight: 700;
//   font-size: 32px;
//   line-height: 44px;
//   color: #000000;

//   @media screen and (min-width: 768px) and (max-width: 1279px) {
//     width: 588px;
//     height: 200px;
//     left: 32px;
//     top: 148px;
//     font-weight: 700;
//     font-size: 68px;
//     line-height: 100px;
//   }

//   @media screen and (min-width: 1280px) {
//     width: 501px;
//     height: 264px;
//     left: 16px;
//     top: 256px;
//     font-weight: 800;
//     font-size: 68px;
//     line-height: 130%;
//   }

//   @media screen and (min-width: 1600px) {
//     width: 600px;
//     font-size: 75px;
//   }
// `;

// const ImageOne = styled.img`
//   position: absolute;
//   line-height: 0;
//   width: 117px;
//   height: auto;
//   left: 0;
//   bottom: 8.5vh;
//   content: url('${petFirstMob}');

//   @media screen and (min-width: 768px) {
//     width: 333px;
//     bottom: 112px;
//     content: url('${petFirstTab}');
//   }

//   @media screen and (min-width: 1280px) {
//     width: 380px;
//     bottom: 0;
//     left: 365px;
//     content: url('${petFirstDesk}');
//   }

//   @media screen and (min-width: 1600px) {
//     width: 400px;
//     left: 550px;
//   }
// `;

// const ImageTwo = styled.img`
//   position: absolute;
//   line-height: 0;
//   width: 195px;
//   height: auto;
//   right: 0;
//   bottom: 131px;
//   content: url('${petSecondMob}');

//   @media screen and (min-width: 768px) {
//     bottom: 282px;
//     width: 420px;
//     content: url('${petSecondTab}');
//   }

//   @media screen and (min-width: 1280px) {
//     bottom: 130px;
//     right: 26px;
//     width: 490px;
//     content: url('${petSecondDesk}');
//   }

//   @media screen and (min-width: 1600px) {
//     width: 570px;
//     right: 50px;
//   }
// `;

// const ImageThree = styled.img`
//   position: absolute;
//   line-height: 0;
//   width: 165px;
//   height: auto;
//   bottom: 0;
//   right: 3px;
//   content: url('${petThirdMob}');

//   @media screen and (min-width: 768px) {
//     bottom: 12px;
//     right: 12px;
//     width: 337px;
//     content: url('${petThirdTab}');
//   }

//   @media screen and (min-width: 1280px) {
//     bottom: 0;
//     right: 112px;
//     width: 336px;
//     content: url('${petThirdDesk}');
//   }

//   @media screen and (min-width: 1600px) {
//     width: 380px;
//   }
// `;

// export { MainPageContainer, MainPageTitle, ImageOne, ImageTwo, ImageThree };
