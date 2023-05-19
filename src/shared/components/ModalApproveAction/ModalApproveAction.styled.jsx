import styled from "@emotion/styled";
import Button from '../Button';

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
    stroke: ${({ theme }) => theme.colors.blue};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}){
        top: 24px;
        right: 24px;
    }
`

const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.space[3] + 'px'};
    margin-top: 40px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet} {
        gap: ${({ theme }) => theme.space[4] + 'px'};
    }
`;

const Btn = styled.button`
    width: 129px;
    border-radius: 40px;
    border: 2px solid ${({ theme }) => theme.colors.blue};

    font-family: ${({ theme }) => theme.fonts.main.bold};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 22px;
    letter-spacing: 0.04em;

    cursor: pointer;
`;

const BtnCancel = styled(Btn)`
    padding: 9px;
    background-color: inherit;
    color: ${({ theme }) => theme.colors.blue};

`;

const BtnConfirm = styled(Btn)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.space[3] + 'px'};

    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.light};
`

export { Backdrop, Modal, BtnWrapper, BtnCancel, BtnConfirm, CloseIcon };