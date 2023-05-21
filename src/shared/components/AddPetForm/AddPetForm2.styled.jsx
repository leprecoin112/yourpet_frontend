import styled from '@emotion/styled';
import { Form, Field } from 'formik';

const FormWrapper = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 24px;
  gap: 20px;
  width: 280px;
  height: 496px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 458px;
    height: 542px;
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
`;
const FormInput = styled(Field)`
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
export { FormInput, FormLabel, FormWrapper, BtnWrapper };
