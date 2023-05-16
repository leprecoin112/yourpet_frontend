import styled from '@emotion/styled';
import mob from '../../shared/images/main/mob-min.png';
import mob2x from '../../shared/images/main/mob2x-min.png';
import tab from '../../shared/images/main/tab-min.png';
import tab2x from '../../shared/images/main/tab2x-min.png';
import desk from '../../shared/images/main/desk-min.png';
import desk2x from '../../shared/images/main/desk2x-min.png';

const PageContainer = styled.div`
  position: relative;
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${mob});
  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mob2x});
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
    font-family: ${({ theme }) => theme.fonts.main.extraBold};
    font-size: 68px;
    font-weight: 800;
    line-height: 130%;
    margin-left: 16px;
    width: 501px;
  }
`;

export { PageContainer, PageTitle };
