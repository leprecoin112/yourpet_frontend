import styled from '@emotion/styled';

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
  &:hover {
    transition: all ${({ theme }) => theme.duration.main}
      ${({ theme }) => theme.transition.main};
    background: ${({ theme }) => theme.colors.gradientBlue};
  }

  /* ================Learn more==================== */

  &.learnMore {
    width: 248px;
    height: 38px;
    position: relative;
    background: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.blue};
    &::after {
      content: 'Learn more';
      position: absolute;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.blue};
    }
    &:hover {
      background: ${({ theme }) => theme.colors.gradientBlue};
      border: none;
      &::after {
        color: ${({ theme }) => theme.colors.white};
      }
    }
    &.blue {
      background: ${({ theme }) => theme.colors.blue};
      border: none;
      &::after {
        content: 'Learn more';
        position: absolute;
        font-size: 16px;
        left: 60px;
        color: ${({ theme }) => theme.colors.white};
      }
      &:hover {
        background: ${({ theme }) => theme.colors.gradientBlue};
      }
    }
  }

  /* ================Filter==================== */

  &.filter {
    width: 40px;
    height: 40px;
    background: ${({ theme }) => theme.colors.lightBlue};
    &:hover {
      background: ${({ theme }) => theme.colors.gradientBlue};
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 152px;
      height: 40px;
      background: ${({ theme }) => theme.colors.white};
      border: 2px solid ${({ theme }) => theme.colors.blue};

      &:hover {
        border: ${({ theme }) => theme.colors.white};
      }
    }
    &.on {
      background: ${({ theme }) => theme.colors.blue};
      &::after {
        color: ${({ theme }) => theme.colors.white};
      }
      &:hover {
        border: ${({ theme }) => theme.colors.blue};
        background: ${({ theme }) => theme.colors.gradientBlue};
      }
    }
  }

  /* ================Like==================== */
  &.like {
    width: 40px;
    height: 40px;
    position: relative;
    background: ${({ theme }) => theme.colors.lightBlue};
    &:hover {
      background: ${({ theme }) => theme.colors.gradientBlue};
    }
  }
`;
