import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    margin-left: 167px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 20px;
    margin-left: 270px;
  }
`;

const BaseLink = styled(Link)`
  padding: 8px ${({ theme }) => theme.space[2] * 5 + 'px'};
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.colors.yellow};

  text-decoration: none;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1.38;
  letter-spacing: 0.04em;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const LoginButton = styled(BaseLink)`
  padding: 8px ${({ theme }) => theme.space[3] * 5 + 'px'};
  color: #fef9f9;
  border: none;
  background-color: ${({ theme }) => theme.colors.yellow};

  display: inline-flex;
  fill: #fef9f9;
  gap: 8px;
`;

const RegisterButton = styled(BaseLink)`
  padding: 8px ${({ theme }) => theme.space[2] * 7.87 + 'px'};
  color: ${({ theme }) => theme.colors.yellow};
  background-color: inherit;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 8px ${({ theme }) => theme.space[2] * 5 + 'px'};
  }
`;

export { Wrapper, BaseLink, LoginButton, RegisterButton };
