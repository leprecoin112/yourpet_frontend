import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(87, 86, 86, 0.6);
`;

const ModalContainer = styled.div`
  position: relative;
  width: 70vw;
  padding: 40px 16px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxShadows.main};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 608px;
    height: 300px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 608px;
    height: 354px;
    padding: 60px 24px;
  }
`;

const IconClose = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  stroke: #54ADFF;
  transition: stroke 250ms;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 24px;
    right: 24px;
  }

  &:hover {
    cursor: pointer;
    stroke: ${({ theme }) => theme.colors.yellow};
  }
`;


const ModalText = styled.p`
  text-align: center;
  font-size: 26px;
  line-height: 49px;
  margin-top: 24px;
  margin-bottom: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 36px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 60vw;
  margin: 0 auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 17px;
    width: 275px;
  }
`;

const ModalBtn = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blue};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 130px;
  }

  &:hover {
    border: none;
    color:  #FEF9F9;
    cursor: pointer;
    background: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%);
  }
`;

const ModalBtnYes = styled(NavLink)`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 40px;
  font-weight: 700;
  text-decoration: none;
  color: #FEF9F9;
  stroke: #FEF9F9;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 130px;
  }

  &:hover {
    cursor: pointer;
    background: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%);
  }
`;




export { Overlay, ModalContainer, IconClose, ModalText, ModalBtn, ModalBtnYes, BtnWrapper };