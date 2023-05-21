import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';
import { css } from '@emotion/react';

const FormWrapper = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 280px;

  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 458px;
  }
`;
const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  color: ${({ theme }) => theme.colors.black};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 20px;
    line-height: 1.32;
    gap: 8px;
  }
`;
const FormInput = styled(Field)`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.main.regular};
  width: 264px;
  height: 40px;
  padding: 10px 16px;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 40px;
  outline-color: ${({ theme }) => theme.colors.blue};
  &:focus,
  &:active {
    border: 2px solid ${({ theme }) => theme.colors.blue};
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: ${({ theme }) => theme.colors.gray};
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 16px;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 394px;
  }
  ${({ validate }) =>
    validate &&
    css`
      border: 1px solid #00c3ad;
      outline: none;

      &:focus,
      &:active {
        border: 2px solid #00c3ad;
        outline: none;
      }
    `}

  ${({ unvalidate }) =>
    unvalidate &&
    css`
      border: 1px solid #f43f5e;
      outline: none;

      &:focus,
      &:active {
        border: 2px solid #f43f5e;
        outline: none;
      }
    `}
`;
const Error = styled(ErrorMessage)`
  position: absolute;
  bottom: -24px;
  left: 16px;
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.red};
`;
const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  gap: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row-reverse;
    gap: 20px;
`;
export { FormInput, FormLabel, Error, FormWrapper, BtnWrapper };
