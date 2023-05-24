import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

const Backdrop = styled.div`
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.colors.backdrop};
`

const Modal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 280px;
    padding: 68px 16px 60px;
    transform: translate(-50%, -50%);

    text-align: center;

    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.boxShadows.main};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}){
        width: 608px;
        padding: 60px;
        border-radius: 40px;
    }
`

const CloseIcon = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    heigth: 24px;
    cursor: pointer;
    stroke: ${({ theme }) => theme.colors.yellow};
    transition: transform ${({ theme }) => theme.duration.main} ${({ theme }) => theme.transition.main};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}){
        top: 24px;
        right: 24px;
    }

    &:hover {
        transform: scale(1.3);
    }
`;

const Title = styled.p`
    font-family: ${({ theme }) => theme.fonts.main.medium};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => (22 / Number(theme.fontSizes[2].slice(0, 2))).toFixed(1)};
    text-align: center;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.fontSizes[4]};
        line-height: ${({ theme }) => (33 / Number(theme.fontSizes[4].slice(0, 2))).toFixed(1)};
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-top: 24px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        gap: 20px;
        display: flex;
        justify-content: center;
        flex-direction: row;
    }
`;

const BaseLink = styled(Link)`
    padding: 8px ${({ theme }) => theme.space[2] * 5 + 'px'};
    border-radius: 40px;
    border: 2px solid ${({ theme }) => theme.colors.yellow};

    text-decoration: none;
    align-items: center;

    font-family: ${({ theme }) => theme.fonts.main.regular};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 1.38;
    letter-spacing: 0.04em;
    transition: transform ${({ theme }) => theme.duration.main} ${({ theme }) => theme.transition.main};

    &:hover {
        transform: scale(1.1);
    }
`;

const LoginButton = styled(BaseLink)`
    padding: 8px ${({ theme }) => theme.space[3] * 5 + 'px'};
    color: #fef9f9;
    border: none;
    background-color: ${({ theme }) => theme.colors.yellow};

    display: inline-flex;
    fill: #fef9f9;
    gap: 8px;
`;

const RegisterButton = styled(BaseLink)`
    padding: 8px ${({ theme }) => theme.space[2] * 7.87 + 'px'};
    color: ${({ theme }) => theme.colors.yellow};
    background-color: inherit;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 8px ${({ theme }) => theme.space[2] * 5 + 'px'};
    }
`;


export {
    Backdrop,
    Modal,
    CloseIcon,
    Title,
    Wrapper,
    LoginButton,
    RegisterButton,
};