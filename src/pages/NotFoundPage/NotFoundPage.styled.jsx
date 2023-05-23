import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { IconPaw } from '../../shared/components/Icons';

const HeadingWrapper = styled.div`
  margin-top: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    gap: 8px;
    justify-content: center;
  }
`;

const RedirectLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 248px;
  margin: 60px auto 0;
  padding: 9px;

  text-decoration: none;

  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.light};

  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: ${({ theme }) =>
    (22 / Number(theme.fontSizes[2].slice(0, 2))).toFixed(1)};
  letter-spacing: 0.04em;

  border-radius: 40px;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.gradientBlue};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 70px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 18px;
  }
`;

const Icon = styled(IconPaw)`
  fill: ${({ theme }) => theme.colors.light};
`;

export { HeadingWrapper, RedirectLink, Icon };
