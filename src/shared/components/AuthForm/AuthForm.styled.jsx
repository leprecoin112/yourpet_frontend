import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormInput = styled(Field)`
  width: 224px;
  height: 22px;
  border: 1px solid #54adff;
  border-radius: 40px;
  padding: 12px 16px;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.main.regular};
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const Btn = styled.button`
  width: 256px;
  height: 48px;
  display: flex;
  flex-direction: row;
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
  line-height: 27px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    transition: ${({ theme }) => theme.transition.main};
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
`;
export { FormContainer, FormInput, Btn };
