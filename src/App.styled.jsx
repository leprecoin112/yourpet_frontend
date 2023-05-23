import styled from '@emotion/styled';

import { Btn } from './shared/components/Button/Button.styled';

export const Button = styled(Btn)`
  width: 200px;
  height: 200px;
  background: ${({ theme }) => theme.colors.yellow};
`;
