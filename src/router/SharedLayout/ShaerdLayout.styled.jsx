import styled from '@emotion/styled';

import mobileImg1 from '../../shared/images/background/bg-mobile.1x.png.png';
import mobileImg2 from '../../shared/images/background/bg-mobile.2x.png.png';
import tabletImg1 from '../../shared/images/background/bg-tablet.1x.png.png';
import tabletImg2 from '../../shared/images/background/bg-tablet.2x.png.png';
import desktopImg1 from '../../shared/images/background/bg-desktop.1x.png.png';
import desktopImg2 from '../../shared/images/background/bg-desktop.2x.png.png';

export const WrapperBackground = styled.div`
  background-image: url(${mobileImg1});
  background-size: contain;
  background-repeat: repeat;
  background-position: center;
  min-height: 100vh;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobileImg2});
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-image: url(${tabletImg1});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tabletImg2});
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    background-image: url(${desktopImg1});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${desktopImg2});
    }
  }
`;
