import styled from '@emotion/styled';

export const Line = styled.span`
    margin-bottom: 14px;
    display: block;
    min-width: 280px;
    height: 4px;
    width: 100%;
  
    border-radius: 40px;
    background-image: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%);
    @media (min-width: 768px) {
      width: 336px;
      height: 8px;
    }
    @media (min-width: 1280px) {
      width: 394px;
    }
  }
`;