import styled from '@emotion/styled';

export const Overlay = styled.div`
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

export const ModalContainer = styled.div`
  position: relative;
  width: 280px;
  height: 786px;
  padding: 44px 20px 16px 20px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxShadows.main};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 681px;
    height: 540px;
    padding: 32px;
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

  &:hover {
    cursor: pointer;
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li``;

export const ModalTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.375rem;

  margin-top: 12px;
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 28px;
    line-height: 1.36rem;

    margin-top: 0;
  }
`;

export const ModalImage = styled.img``;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 28px;
  }
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.357rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
    line-height: 1.375rem;
  }
`;

export const ModalComments = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.357rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
    line-height: 1.5rem;
    margin-bottom: 70px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 17px;
  }
`;
