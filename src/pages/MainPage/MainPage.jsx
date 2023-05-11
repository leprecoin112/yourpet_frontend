import { PageContainer, PageTitle, ImgWrapper } from './MainPage.styled';
import {
  ResponsiveImageFirst,
  ResponsiveImageSecond,
  ResponsiveImageThird,
} from './ResponsiveImages';
const MainPage = () => {
  return (
    <PageContainer>
      <PageTitle>Take good care of your small pets</PageTitle>
      <ImgWrapper>
        <ResponsiveImageFirst />

        <ResponsiveImageSecond />

        <ResponsiveImageThird />
      </ImgWrapper>
    </PageContainer>
  );
};

export default MainPage;