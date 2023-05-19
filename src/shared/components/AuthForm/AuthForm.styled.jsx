import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Form, Field, ErrorMessage } from 'formik';

const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  outline: none;
  background-color: ${({ theme }) => theme.colors.white};
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  &:focus,
  &:active {
    border: 2px solid ${({ theme }) => theme.colors.blue};
    outline: none;
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

const Btn = styled.button`
  width: 256px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 24px;
  padding: 10px 28px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 40px;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    transition: ${({ theme }) => theme.duration.main}
      ${({ theme }) => theme.transition.main};
    background: ${({ theme }) => theme.colors.gradientBlue};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 52px;
    margin-bottom: 16px;
    width: 458px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 40px;
  }
`;
const FormLabel = styled.label`
  position: relative;
  &:not(:last-child) {
    margin-bottom: 24px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 32px;
    }
  }
`;
const ShowPassword = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  padding: 0;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  stroke: ${({ theme }) => theme.colors.blue};
`;
const SecureMsg = styled.div`
  position: absolute;
  bottom: -24px;
  left: 16px;
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.green};
`;
const IconWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
  padding: 0;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
`;
export {
  FormContainer,
  FormInput,
  Error,
  Btn,
  InputWrapper,
  ShowPassword,
  FormLabel,
  SecureMsg,
  IconWrapper,
};
