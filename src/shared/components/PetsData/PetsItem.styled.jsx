import styled from "@emotion/styled";


const PetItemWrapper = styled.li`
  position: relative;
  margin-left: auto;
  margin-right: auto;

  width: 280px;
  display: flex;
  flex-direction: column;
  min-width: 280px;
  padding: 16px 20px 40px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 702px;
    padding: 20px;
    display: flex;
    flex-direction: row;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 820px;
    padding-right: 28px;
  }
`;

const PetPhoto = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 20px;
  margin: 0 auto;
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0;
    width: 128px;
    height: 128px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 162px;
    height: 162px;
  }
`;

const PetInfoContainer = styled.div`

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-left: 32px;
  }
`;

const PetInfoTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  &:not(:last-child) {
    margin-bottom: 12px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 16px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-weight: 600;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 16px;
    line-height: 22px;
  }

`;

const PetInfo = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-left: 8px;
`;

const DeleteBtn = styled.div`
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 272px;
  stroke: #54ADFF;
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    right: 20px;
    top: 20px;
  };
`;

const ModalDeleteText = styled.p`
  font-weight: 500;
  font-size: 30px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 36px;
  }
`;



export {PetItemWrapper, PetPhoto, PetInfoContainer,PetInfoTitle, PetInfo, DeleteBtn, ModalDeleteText};