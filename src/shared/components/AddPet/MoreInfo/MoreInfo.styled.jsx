import styled from '@emotion/styled';

import { IconFemale, IconMale, IconPlusBig } from '../../Icons';
import { Field } from 'formik';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }

  &.to-add {
    gap: 24px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: column;
    }
  }

  &.to-sell {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-top: 16px;
      gap: 63px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      gap: 78px;
    }
  }
`;

const Title = styled.h2`
  margin-top: 16px;

  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[3]};
    margin-bottom: 8px;
  }
`;
const ContainerFirstBtn = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 48px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 40px;
    margin-top: 20px;
  }

  &.to-sell {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 0px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      margin-bottom: 0px;
      margin-top: 0px;
    }
  }
`;

const ContainerRadioBtn = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;

    row-gap: 48px;
    flex-direction: column;

    &.to-sell {
      row-gap: 0;
    }
  }
`;

const ContainerForm = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

const RadioBtn = styled(Field)`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 1.5;
  color: rgb(136, 136, 136);
  cursor: pointer;
`;

const Label = styled.label`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
const FemaleIcon = styled(IconFemale)`
  margin-right: 12px;
  fill: ${({ theme }) => theme.colors.white};
  stroke: ${({ theme }) => theme.colors.red};
`;
const MaleIcon = styled(IconMale)`
  margin-right: 12px;
  fill: ${({ theme }) => theme.colors.white};
  stroke: ${({ theme }) => theme.colors.blue};
`;

const InputFileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 112px;
  background-color: rgb(204, 228, 251);
  border-radius: 20px;
  color: rgb(84, 173, 255);
  cursor: pointer;
  overflow: hidden;
  object-position: center center;
  object-fit: cover;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
    margin-top: 12px;
  }
`;

const InputFile = styled(Field)`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0px;
  padding: 0px;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0px, 0px, 0px, 0px);
  overflow: hidden;
`;

const LabelFile = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 28px;
  margin-top: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSizes[3]};
  }

  &.to-add {
    margin-top: 16px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: row;
      font-size: ${({ theme }) => theme.fontSizes[3]};
    }
  }

  &.to-sell {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-top: 48px;
      align-items: start;
    }
  }
`;
const IconsPlusBig = styled(IconPlusBig)`
  fill: ${({ theme }) => theme.colors.blue};
  stroke: ${({ theme }) => theme.colors.blue};
`;

const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-weight: 500;
    font-size:  ${({ theme }) => theme.fontSizes[1]};
    line-height: 1.36;
    color: ${({ theme }) => theme.colors.black});

    &.to-add {
        margin-bottom: 0px;
      }

    &:not(last-child) {
        margin-bottom: 20px;
      }
  
      @media screen and (min-width: ${({ theme }) =>
        theme.breakpoints.tablet}) {
        font-size:  ${({ theme }) => theme.fontSizes[3]};
  
        &:not(last-child) {
        margin-bottom: 0px;
      }
  
      
    }
`;

const InputComents = styled(Field)`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.04em;
  width: 264px;
  height: 92px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 20px;
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
  @media screen and (max-width: 400px) {
    width: 100%;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 395px;

    &.to-lost {
      height: 182px;
    }
  }
`;

const FormInputPet = styled(Field)`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.04em;
  width: 264px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 40px;
  padding: 8px 16px;
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
    width: 395px;
  }
`;
const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 24px;

  &.to-add {
    margin-top: 24px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: row-reverse;
    }
  }

  &.to-sale {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-top: 60px;
      flex-direction: row-reverse;
    }
  }
`;

const Image = styled.img`
  height: 100%;
  object-fit: center;
`;

export {
  Container,
  Title,
  ContainerRadioBtn,
  FemaleIcon,
  MaleIcon,
  RadioBtn,
  Label,
  InputFile,
  InputFileContainer,
  LabelFile,
  IconsPlusBig,
  FormLabel,
  InputComents,
  FormInputPet,
  ContainerForm,
  ContainerFirstBtn,
  BtnWrapper,
  Image,
};
