import styled from '@emotion/styled';

const AddPetWrapper = styled.div`
  min-width: 280px;
  max-width: 280px;
  padding: 40px 12px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 40px;
  padding: 20px 8px 16px 8px;
  margin: 20px auto 34px auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 458px;
    max-width: 704px;
    margin-top: 60px;
    padding: 20px 32px;

    &.to-sell {
      width: 458px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 822px;

    &.to-lost {
      padding: 20px 73px;
    }
  }
`;

const AddPetWrapperShort = styled.div`
  width: 280px;
  height: 496px;
  padding: 40px 12px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 40px;
  padding: 20px 8px 16px 8px;
  margin: 20px auto 34px auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 458px;
    height: 542px;
    padding: 20px 32px;
    margin-top: 60px;
  }
`;

const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35rem;
  margin-left: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 28px;
    margin-left: 0;
  }

  &.to-sell {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      text-align: center;
    }
  }
`;

const AddPetNavContainer = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 16px;
  }

  &.to-sell {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      align-items: center;
      justify-content: center;
    }
  }
`;

const NavItem = styled.li``;

const NavItemText = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4rem;
  color: ${({ theme }) => theme.colors.gray};

  &.current {
    color: ${({ theme }) => theme.colors.blue};
  }

  &.done {
    color: ${({ theme }) => theme.colors.green};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
  }
`;

const NavUnderline = styled.div`
  width: 80px;
  height: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lightBlue};

  &.current {
    background-color: ${({ theme }) => theme.colors.blue};
  }
  &.done {
    background-color: ${({ theme }) => theme.colors.green};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 120px;
    margin-top: 12px;
  }
`;

export {
  AddPetWrapper,
  AddPetWrapperShort,
  PageTitle,
  AddPetNavContainer,
  NavItem,
  NavItemText,
  NavUnderline,
};
