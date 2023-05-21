import styled from '@emotion/styled';
import IconPlusSmall from '../Icons/IconPlusSmall';
import { Btn } from '../Button/Button.styled';

export const AddButtonContainer = styled.div`
  display: flex;
`;

export const AddButton = styled(Btn)`
  width: 129px;
  height: 40px;
  background: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddButtonLabel = styled.p`
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.white};

  transition: ${({ theme }) => theme.transition.main};
`;

export const AddButtonIcon = styled(IconPlusSmall)`
  width: 24px;
  height: 24px;
  margin: 0;
  margin-left: 8px;
  fill: ${({ theme }) => theme.colors.black};
  stroke: ${({ theme }) => theme.colors.white};
`;
