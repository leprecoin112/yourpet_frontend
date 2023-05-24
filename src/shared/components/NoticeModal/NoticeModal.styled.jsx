import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.backdrop};
  backdrop-filter: blur(4px);
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 280px;
  height: 90%;
  padding: 44px 16px 12px;
  transform: translate(-50%, -50%);
  overflow-y: scroll;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 681px;
    height: auto;
    padding: 32px 32px 24px;
    border-radius: 40px;
    overflow-y: auto;
  }
`;

export const IconClose = styled.div`
  stroke: ${({ theme }) => theme.colors.blue};
  position: absolute;
  top: 16px;
  right: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 24px;
    right: 24px;
  }

  transition: stroke ${({ theme }) => theme.duration.main}
      ${({ theme }) => theme.transition.main},
    transform ${({ theme }) => theme.duration.main}
      ${({ theme }) => theme.transition.main};

  &:hover {
    cursor: pointer;
    stroke: ${({ theme }) => theme.colors.yellow};
    transform: scale(1.3);
  }
`;

export const DataContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}){
    display: flex;
    gap: 24px;
  }
`;

export const ModalTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: 24px;
  line-height: 1.375rem;
  letter-spacing: -0.01em;

  margin-top: 12px;
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 28px;
    line-height: 1.36rem;

    margin-top: 0;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 240px;

  overflow: hidden;
  border-radius: 0px 0px 40px 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 262px;
    height: 298px;
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CategoryLabel = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  top: 16px;
  left: 0;
  width: 126px;
  height: 32px;
  padding-left: 17px;

  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) =>
    (19 / Number(theme.fontSizes[1].slice(0, 2))).toFixed(1)};

  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 0px 16px 16px 0px;
`;

export const Table = styled.table`
  
`;

export const RawTitle = styled.td`
  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) =>
  (19 / Number(theme.fontSizes[1].slice(0, 2))).toFixed(1)};
  width: 80px;
    
  &:not(:last-child) {
    padding-bottom: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 120px;
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) =>
      (22 / Number(theme.fontSizes[2].slice(0, 2))).toFixed(1)};
  }
`;

export const RawData = styled.td`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: ${({ theme }) =>
    (16 / Number(theme.fontSizes[0].slice(0, 2))).toFixed(1)};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) =>
      (22 / Number(theme.fontSizes[2].slice(0, 2))).toFixed(1)};
  }
`;

export const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.yellow};
`;

export const CommentsWrapper = styled.p`
  margin-top: 4px;
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) =>
    (19 / Number(theme.fontSizes[1].slice(0, 2))).toFixed(1)};
  letter-spacing: 0.04em;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 28px;
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) =>
      (24 / Number(theme.fontSizes[2].slice(0, 2))).toFixed(1)};
  }
`;

export const CommentsTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  letter-spacing: 0.04em;


  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
    line-height: 1.5rem;
    margin-bottom: 70px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  margin-top: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 17px;
    margin-top: 70px;
  }
`;

export const ContactButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 256px;
  height: 40px;

  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: ${({ theme }) =>
    (22 / Number(theme.fontSizes[2].slice(0, 2))).toFixed(1)};

  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 40px;
  color: ${({ theme }) => theme.colors.blue};

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.gradientBlue};
    border: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 129px;
    gap: 17px;
  }
`;

export const AddToFavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 256px;
  height: 40px;
  gap: 8px;

  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: ${({ theme }) =>
    (22 / Number(theme.fontSizes[2].slice(0, 2))).toFixed(1)};

  border: none;
  border-radius: 40px;
  color: ${({ theme }) => theme.colors.white};
  stroke: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.gradientBlue};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 129px;
  }
`;
