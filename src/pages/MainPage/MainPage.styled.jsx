import styled from '@emotion/styled';
import mob from '../../shared/images/main/mob-min.png';
import mob2x from '../../shared/images/main/mob2x-min.png';
import tab from '../../shared/images/main/tab-min.png';
import tab2x from '../../shared/images/main/tab2x-min.png';
import desk from '../../shared/images/main/desk-min.png';
import desk2x from '../../shared/images/main/desk2x-min.png';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  padding-top: 60px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 80px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: 30px;
    flex-direction: row;
  }

  &::after {
    content: '';
    display: inline-block;
    width: 474px;
    height: 450px;
    background-image: url(${mob});
    background-repeat: no-repeat;
    position: relative;
    top: -20px;
    left: 40px;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${mob2x});
      background-size: 100%;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 1200px;
      height: 1150px;
      top: -100px;
      left: 120px;
      background-image: url(${tab});
      @media screen and (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${tab2x});
        background-size: 100%;
      }
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: 917px;
      height: 680px;
      top: 0;
      left: 0;
      background-image: url(${desk});
    }
  }
`;

const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: 32px;
  font-weight: 700;
  line-height: 138%;
  width: 280px;
  color: ${({ theme }) => theme.colors.black};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 68px;
    line-height: 147%;
    width: 588px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-family: ${({ theme }) => theme.fonts.main.extraBold};
    font-size: 68px;
    font-weight: 800;
    line-height: 130%;
    width: 501px;
  }
`;

export { PageContainer, PageTitle };
