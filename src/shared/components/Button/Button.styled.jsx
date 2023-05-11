import styled from "@emotion/styled";

export const Btn = styled.button`
  /* ================base==================== */

  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.main.regular};
  transition: ${({ theme }) => theme.transition.main};

  /* ================add==================== */

  &.add {
    width: 80px;
    height: 80px;
    position: relative;
    background: ${({ theme }) => theme.colors.blue};
    box-shadow: ${({ theme }) => theme.boxShadows.main};
    &::after {
      content: "Add pet";
      position: absolute;
      font-size: 12px;
      top: 48px;
      color: ${({ theme }) => theme.colors.white};
    }
    &:hover {
       transition: ${({ theme }) => theme.transition.main};
       background: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%);
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 129px;
      height: 40px;
      &::after {
        font-size: 16px;
        top: 9px;
        left: 16px;
  
    }
      }
    }
  }
`;
