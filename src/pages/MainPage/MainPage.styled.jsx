import styled from '@emotion/styled';
import bgMob from '../../shared/images/mainPage/bg-mob-min.png';

const PageContainer = styled.div`
  padding-top: 60px;
  background-size: contain;
  background: url(${bgMob});
  width: 100%;
  height: 500px;
`;
const PageTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin: 0 20px 20px;
`;
const ImgWrapper = styled.div`
  position: reletive;
`;
export { PageContainer, PageTitle, ImgWrapper };
