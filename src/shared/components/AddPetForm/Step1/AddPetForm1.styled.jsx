import styled from '@emotion/styled';
import { Form, Field } from 'formik';

const RadioBtnWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  gap: 12px;
  width: 280px;
  height: 496px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 458px;
    height: 542px;
  }
`;
const RadioBtn = styled(Field)`
  cursor: pointer;
  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.main.regular};
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: ${({ theme }) => theme.colors.black};
  }
`;
const RadioLabel = styled.label`
  padding: 8px 16px;
  width: fit-content;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 40px;
  cursor: pointer;
  & :hover,
  & :focus {
    background-color: ${({ theme }) => theme.colors.blue};
  }
  &:field {
    & :hover,
    & :focus {
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 91px;
`;
export { RadioBtnWrapper, RadioLabel, RadioBtn, BtnWrapper };
