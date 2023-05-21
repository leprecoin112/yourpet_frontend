import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const RedirectText = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.gray};
`;

const Link = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  letter-spacing: 0.04em;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.blue};
`;
export { RedirectText, Link };
