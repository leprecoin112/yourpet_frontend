import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 80px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: 45px;
  }
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 40px 12px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 608px;
    padding: 60px 75px;
  }
`;

const RedirectLink = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.gray};
`;

const Link = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.04em;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.blue};
`;
export { PageContainer, FormWrapper, RedirectLink, Link };
