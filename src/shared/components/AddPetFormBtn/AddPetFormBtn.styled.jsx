import styled from '@emotion/styled';

const ButtonBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding: 8px 16px;
  cursor: pointer;

  min-width: 94px;
  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;
  color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 40px;
  transition: all 250ms;
  &:hover,
  &:focus {
    transition: all ${({ theme }) => theme.duration.main}
      ${({ theme }) => theme.transition.main};
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
  & svg {
    stroke: currentColor;
  }
`;

const ButtonNext = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 28px;
  cursor: pointer;
  gap: 12px;
  width: 248px;
  height: 40px;
  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 40px;

  &:hover,
  &:focus {
    transition: all ${({ theme }) => theme.duration.main}
      ${({ theme }) => theme.transition.main};
    background: ${({ theme }) => theme.colors.gradientBlue};
  }

  & svg {
    fill: currentColor;
  }
`;
export { ButtonBack, ButtonNext };
