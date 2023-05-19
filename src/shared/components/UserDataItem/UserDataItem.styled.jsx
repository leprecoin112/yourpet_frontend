import styled from "@emotion/styled";
import { Form, Field } from 'formik';

const UserDataWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row-reverse;
    gap: 71px;
    align-items: top;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
    gap: 25px;
  }
`;

const UserPhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 25px auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 0;
  }
`;


const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 355px;
    padding: 0;
  }
`;

const PhotoContainer = styled.img`
  display: block;
  width: 182px;
  height: 182px;
  border-radius: 40px;
`;

const EditPhotoWrapper = styled.input`
  width: 94px;
  margin-top: 14px;

  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;

  border: none;
  background: none;
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: row;
  width: 264px;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 356px;
    }

  &:not(:last-child) {
    margin-bottom: 12px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 8px;
    }
  }
`;


const FormInput = styled(Field)`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: 12px;
  line-height: 16px;
  min-width: 190px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 40px;
  padding: 4px 12px;
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.blue};
  }
  
  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.main.regular};
    font-size: 12px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.gray};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 256px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export { UserDataWrapper, UserPhotoWrapper, FormContainer, FormInput, FormLabel, PhotoContainer, EditPhotoWrapper };
