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

  &::after {
    content: '';
    display: inline-block;
    width: 474px;
    height: 450px;
    background-image: url(${mob});
    background-repeat: no-repeat;
    position: relative;
    top: -20px;
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
