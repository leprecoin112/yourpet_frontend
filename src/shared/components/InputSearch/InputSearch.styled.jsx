import styled from '@emotion/styled';
import { IconSearch, IconCrossBig } from '../Icons';

export const InputContainer = styled.form`
  width: 280px;
  position: relative;
  display: flex;
  justify-content: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 608px;
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  border-radius: 24px;
  border: none;
  outline: none;
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  background: ${({ theme }) => theme.colors.white};
  padding: 14px 20px 13px 20px;
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-radius: 20px;
    font-size: 20px;
    padding: 10px 20px;
    font-size: 20px;
  }
`;

export const BtnSearch = styled.button`
  position: absolute;
  padding: 0;
  top: 0;
  right: 0;
  margin-right: 20px;
  margin-top: 10px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: 12px;
  }
`;

export const Icon = styled(IconSearch)`
  fill: ${({ theme }) => theme.colors.blue};
  &:hover {
    transition: all ${({ theme }) => theme.duration.main}
      ${({ theme }) => theme.transition.main};
    fill: ${({ theme }) => theme.colors.yellow};
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  padding: 0;
  top: 0;
  right: 0;
  margin-right: 13px;
  margin-top: 10px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const IconCross = styled(IconCrossBig)`
  stroke: ${({ theme }) => theme.colors.yellow};
  &:hover {
    transition: all ${({ theme }) => theme.duration.main}
      ${({ theme }) => theme.transition.main};
    stroke: ${({ theme }) => theme.colors.blue};
  }
`;
