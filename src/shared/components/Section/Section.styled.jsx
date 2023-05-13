import styled from '@emotion/styled';
import backgroundMob from '../../images/background/bg-mobile.1x.png.png';
import backgroundTab from '../../images/background/bg-tablet.1x.png.png';
import backgroundDesk from '../../images/background/bg-desktop.1x.png.png';
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  width: 100vw;
  background-image: url(${backgroundMob});
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-image: url(${backgroundTab});
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    background-image: url(${backgroundDesk});
  }
`;

export { Wrapper };
