import styled from '@emotion/styled';


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
  width: 280px;
  height: 287px;
  padding: 68px 16px 60px 16px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxShadows.main};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 608px;
    height: 354px;
    padding: 60px 24px;
  }
`;

const IconClose = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 24px;
    right: 24px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ModalTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.375rem;
  text-align: center;
  
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 36px;
    line-height: 1.36rem;
  }
`;

const ModalText = styled.p`
  text-align: center;
  margin-top: 24px;
  margin-bottom: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 24px;
    margin-top: 52px;
    margin-bottom: 60px;
  }
`;

const ModalBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  padding: 8px 54px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 40px;
  font-weight: 700;
  color: #FEF9F9;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: auto;
    margin-right: auto;
    width: 248px;
  }

  &:hover {
    cursor: pointer;
    background: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%);
  }
`;




export { Overlay, ModalContainer, IconClose, ModalTitle, ModalText, ModalBtn };