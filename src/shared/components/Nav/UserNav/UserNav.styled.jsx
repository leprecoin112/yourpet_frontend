import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  gap: 12px;
  stroke: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.yellow};
 
letter-spacing: 0.04em;
  }
`;
