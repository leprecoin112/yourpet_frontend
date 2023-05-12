import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const FormWrapper = styled.div`
display: flex;
  flex-direction:column;
  gap:
  width: 280px;
  padding: 40px 12px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 20px;
`;

const FormTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.black};
`;
const RedirectLink = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: 12px;
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
export { FormWrapper, FormTitle, RedirectLink, Link };
