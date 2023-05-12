import { PageContainer, PageTitle, ImageWrapper } from './MainPage.styled';
import {
  ResponsiveImageFirst,
  ResponsiveImageSecond,
  ResponsiveImageThird,
} from './ResponsiveImages';
import Container from '../../shared/components/Container/Container';
const MainPage = () => {
  return (
    <Container>
      <PageContainer>
        <PageTitle>Take good care of your small pets</PageTitle>
        <ImageWrapper>
          <ResponsiveImageFirst />

          <ResponsiveImageSecond />

          <ResponsiveImageThird />
        </ImageWrapper>
      </PageContainer>
    </Container>
  );
};

export default MainPage;
