import styled from "@emotion/styled";

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px 32px;
    margin-top: 24px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}){
        margin-top: 40px;
    }
`