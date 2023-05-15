import styled from '@emotion/styled';
import { ErrorMessage } from 'formik';

const Error = styled(ErrorMessage)`
  margin-top: 4px;
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.red};
`;

export { Error };
