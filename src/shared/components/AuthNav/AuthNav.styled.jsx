import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 8px;

  padding: 0 ${({ theme }) => theme.space[2] * 5 + "px"};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

const BaseButton = styled.button`
  padding: 8px ${({ theme }) => theme.space[2] * 5 + "px"};
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.colors.yellow};

  text-decoration: none;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1.38;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const PrimaryButton = styled(BaseButton)`
  color: #fef9f9;
  background-color: ${({ theme }) => theme.colors.yellow};
`;

const SecondaryButton = styled(BaseButton)`
  color: ${({ theme }) => theme.colors.yellow};
  background-color: inherit;
`;

export { Wrapper, BaseButton, PrimaryButton, SecondaryButton };
