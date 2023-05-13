import styled from "@emotion/styled";

export const NotFoundContainer = styled.div`
    display: flex;
    align-items: baseline;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.blue};
    font-family: ${({ theme }) => theme.fonts.main.extraBold};
    font-weight: 800;
    line-height: 130%;
`

export const FourLeft = styled.span`
    font-size: 130px;
    transform: rotate(-11.34deg);

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 326px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 381px;
    }
`;

export const FourRight = styled.span`
    font-size: 130px;
    transform: rotate(24.23deg);

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 326px;
    }   

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 381px;
    }
`;

export const CatBackground = styled.div`
    position: relative;
    width: 110px;
    height: 110px;
    overflow: hidden;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.yellow};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 278px;
        height: 278px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 324px;
        height: 324px;
    }    
`;

export const CatImage = styled.img`
    position: relative;
    top: 2px;
    left: 13px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        top: 6px;
        left: 32px;
    }  
    
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        top: 8px;
        left: 37px;
    }  
`;