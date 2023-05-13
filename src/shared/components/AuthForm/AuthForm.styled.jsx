import styled from '@emotion/styled';
import { Form, Field } from 'formik';

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
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.blue};
  }
  &:not(:last-child) {
    margin-bottom: 24px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 32px;
    }
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

const Btn = styled.button`
  width: 256px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 40px;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: 20px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    transition: ${({ theme }) => theme.transition.main};
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
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
export { FormContainer, FormInput, Btn, InputWrapper };
