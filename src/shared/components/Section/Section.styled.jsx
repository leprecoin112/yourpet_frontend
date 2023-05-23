import styled from '@emotion/styled';

import bgMob1 from '../../images/background/bg-mobile.1x.png';
import bgMob2 from '../../images/background/bg-mobile.2x.png';
import bgTab1 from '../../images/background/bg-tablet.1x.png';
import bgTab2 from '../../images/background/bg-tablet.2x.png';
import bgDesk1 from '../../images/background/bg-desktop.1x.png';
import bgDesk2 from '../../images/background/bg-desktop.2x.png';

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  padding-top: 40px;
  padding-bottom: 40px;
  background-repeat: repeat;
  overflow-x: hidden;

  background-image: url(${bgMob1});
  background-size: 100%;

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMob2});
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 80px;
    padding-bottom: 80px;
    background-image: url(${bgTab1});

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgTab2});
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    background-image: url(${bgDesk1});
    overflow: hidden;

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgDesk2});
    }
  }
`;

export { Wrapper };
