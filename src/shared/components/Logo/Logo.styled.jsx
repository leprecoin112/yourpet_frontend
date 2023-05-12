import styled from "@emotion/styled";

export const StyledLogo = styled.img`
    transition: transform ${({ theme }) => theme.duration.main} ${({ theme }) => theme.transition.main};

    &:hover,
    &:focus {
        transform: scale(1.1);
    }
`