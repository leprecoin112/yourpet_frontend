import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  padding: 0 ${({ theme }) => theme.space[2] * 5 + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 20px;
  }
`;

const BaseButton = styled.button`
  padding: 8px ${({ theme }) => theme.space[2] * 5 + 'px'};
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
  padding: 8px ${({ theme }) => theme.space[3] * 5 + 'px'};
  color: #fef9f9;
  background-color: ${({ theme }) => theme.colors.yellow};

  display: inline-flex;
  fill: #fef9f9;
  gap: 8px;
`;

const SecondaryButton = styled(BaseButton)`
  padding: 8px ${({ theme }) => theme.space[2] * 7.87 + 'px'};
  color: ${({ theme }) => theme.colors.yellow};
  background-color: inherit;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 8px ${({ theme }) => theme.space[2] * 5 + 'px'};
  }
`;

export { Wrapper, BaseButton, PrimaryButton, SecondaryButton };
