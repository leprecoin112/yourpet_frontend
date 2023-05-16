import styled from '@emotion/styled';
import { IconCrossBig } from '../Icons';

export const ClearButton = styled.button`
  position: absolute;
  top: 10px;
  right: 40px;
  padding: 4px;
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.yellow};
  background: transparent;
  border: none;
`;

export const IconCross = styled(IconCrossBig)`
  width: 100%;
  height: 100%;
  fill: ${({ theme }) => theme.colors.yellow};
`;
