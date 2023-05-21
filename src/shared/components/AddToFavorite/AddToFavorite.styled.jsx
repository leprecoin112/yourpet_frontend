import styled from '@emotion/styled';
import { Btn } from '../Button/Button.styled';

export const ButtonWrapper = styled.div``;

export const IconWrapper = styled.div``;

export const AddButton = styled(Btn)`
  color: ${({ theme }) => theme.colors.light};
  width: 256px;
  height: 40px;
  background: ${({ theme }) => theme.colors.blue};
  border: none;
  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1.38;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;

  stroke: ${({ theme }) => theme.colors.light};

  &:hover {
    transition: all ${({ theme }) => theme.duration.main}
      ${({ theme }) => theme.transition.main};
    background: ${({ theme }) => theme.colors.gradientBlue};
    color: ${({ theme }) => theme.colors.light};
    stroke: ${({ theme }) => theme.colors.light};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 129px;
  }
`;
