import styled from "@emotion/styled";

export const Heading = styled.h1`
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.main.bold};
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes[4]};
    line-height: ${({ theme }) => (33 / Number(theme.fontSizes[4].slice(0, 2))).toFixed(1)};  
    color: ${({ theme }) => theme.colors.black};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.fontSizes[6]};
        line-height: ${({ theme }) => (66 / Number(theme.fontSizes[6].slice(0, 2))).toFixed(1)}; 
    }
`