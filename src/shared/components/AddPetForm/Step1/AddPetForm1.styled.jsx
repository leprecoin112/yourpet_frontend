import styled from '@emotion/styled';
import { Form, Field } from 'formik';

const RadioBtnWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 40px;
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
  transition: all 250ms;

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.light};
  }
  &:field {
    & :hover,
    & :focus {
      background-color: ${({ theme }) => theme.colors.blue};
    }
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

  ${
    '' /* &:checked + ${RadioLabel} {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.light};
  } */
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 91px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
    justify-content: center;
    margin-top: 137px;
    flex-direction: row-reverse;
  }
`;
export { RadioBtnWrapper, RadioLabel, RadioBtn, BtnWrapper };
