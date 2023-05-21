import styled from '@emotion/styled';

const ButtonBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 40px;

  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;

  color: ${({ theme }) => theme.colors.blue};
  background-color: transparent;
  border: none;

  & svg {
    stroke: currentColor;
  }
`;

const ButtonNext = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: padding: 8px 28px;
  gap: 12px;
  min-width: 248px;
  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 40px;
    &:hover {
    transition: all ${({ theme }) => theme.duration.main}
      ${({ theme }) => theme.transition.main};
    background: ${({ theme }) => theme.colors.gradientBlue};
  }

  & svg {
    fill: currentColor;
  }

`;
export { ButtonBack, ButtonNext };
