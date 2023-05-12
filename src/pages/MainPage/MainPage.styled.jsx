import styled from '@emotion/styled';
import imgMob from '../../shared/images/mainPage/pets-mob-min.png';
import bgMob from '../../shared/images/background/bg-mobile.1x.png.png';
const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 60px;
  background-image: url(${bgMob});
`;
const MainPageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-weight: 700;
  font-size: 32px;
  line-height: 138%;
  color: ${({ theme }) => theme.colors.black};
`;
const ImageWrapper = styled.div`
  min-width: 320px;
  height: 393px;
  background-size: cover;
  background-repeat: no-repeat;

  background-image: url(${imgMob});
`;

export { MainPageContainer, ImageWrapper, MainPageTitle };
