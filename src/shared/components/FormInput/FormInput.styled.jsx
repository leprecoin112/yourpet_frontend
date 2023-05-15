import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

const InputWrapper = styled.div`
  position: relative;
  &:not(:last-child) {
    margin-bottom: 24px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 32px;
    }
  }
`;
const FormInput = styled(Field)`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.04em;
  width: 256px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 40px;
  padding: 12px 16px;
  &:focus,
  &:active {
    border: 2px solid ${({ theme }) => theme.colors.blue};
  }

  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.main.regular};
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: ${({ theme }) => theme.colors.gray};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 458px;
  }
`;

const Error = styled(ErrorMessage)`
  position: absolute;
  bottom: -20px;
  left: 16px;
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.red};
`;

export { FormInput, Error, InputWrapper };
