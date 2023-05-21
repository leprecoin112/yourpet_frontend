import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const ErrorMessage = styled.p``;

const ButtonsWrapper = styled.div`

`
const MobileAddButton = styled(Link)`
    position: fixed;
    top: 460px;
    right: 20px;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.space[2] + 'px'};

    width: 80px;
    height: 80px;

    background: ${({ theme }) => theme.colors.blue};
    border: none;
    border-radius: 50%;

    cursor: pointer;

    stroke: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};

    text-decoration: none;

    font-family: ${({ theme }) => theme.fonts.main.semiBold};
    font-size: ${({ theme }) => theme.fontSizes[0]};
    line-height: ${({ theme }) => (16 / Number(theme.fontSizes[0].slice(0, 2))).toFixed(1)}; 

    &:hover {
        background: ${({ theme }) => theme.colors.gradientBlue};
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
    }
`;

const AddButton = styled(Link)`
    display: none;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: block;
        width: 129px;

        text-decoration: none;
        font-size: ${({ theme }) => theme.fontSizes[0]};
        line-height: ${({ theme }) => (22 / Number(theme.fontSizes[2].slice(0, 2))).toFixed(1)}; 
        background: ${({ theme }) => theme.colors.blue};
    }
`

export { ErrorMessage, ButtonsWrapper, MobileAddButton, AddButton };