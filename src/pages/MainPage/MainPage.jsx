import { PageContainer, PageTitle, ImageWrapper } from './MainPage.styled';
import {
  ResponsiveImageFirst,
  ResponsiveImageSecond,
  ResponsiveImageThird,
} from './ResponsiveImages';
const MainPage = () => {
  return (
    <PageContainer>
      <PageTitle>Take good care of your small pets</PageTitle>
      <ImageWrapper>
        <ResponsiveImageFirst />

        <ResponsiveImageSecond />

        <ResponsiveImageThird />
      </ImageWrapper>
    </PageContainer>
  );
};

export default MainPage;
