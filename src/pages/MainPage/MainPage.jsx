import {
  MainPageContainer,
  ImageWrapper,
  MainPageTitle,
} from './MainPage.styled';
import Container from '../../shared/components/Container/Container';

const MainPage = () => {
  return (
    <Container>
      <MainPageContainer>
        <MainPageTitle>Take good care of your small pets</MainPageTitle>
        <ImageWrapper></ImageWrapper>
      </MainPageContainer>
    </Container>
  );
};

export default MainPage;
