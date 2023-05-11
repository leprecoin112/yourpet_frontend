import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 8px;
  
  padding: 0 ${({ theme }) => theme.space[2] * 5 + "px"};
  

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {

  }
`;

const Button = styled.button`
  padding: 8px ${({ theme }) => theme.space[2] * 5 + "px"};

  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  background-color: inherit;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`;

export { Wrapper, Button, NavLink };
