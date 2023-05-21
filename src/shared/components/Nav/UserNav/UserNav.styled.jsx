import styled from '@emotion/styled';



export const Wrapper = styled.div`
  display: flex;
  
  align-items: center;
  gap: 12px;
  stroke: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.yellow};
 
letter-spacing: 0.04em;
  }
`;
