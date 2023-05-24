import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const Backdrop = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(60, 60, 60, 0.2);

  backdrop-filter: blur(4px);
`;

const shake = keyframes`
    50% { top: 6px; }
`

const shadow = keyframes`
    50% { 
        width: 110px;
        margin-left: -40px;
    }
`

const tail = keyframes`
    50% { transform: rotate(38deg); }
`

const track = keyframes`
    to { margin-left: 20px; }
`

const eye = keyframes`
    50% { top: 2px; }
`

const mustacheL = keyframes`
    50% { transform: rotate(-10deg); }
`

const mustacheR = keyframes`
    0%, 100% { transform: rotateY(180deg);}
    50% { transform: rotateY(180deg) rotateZ(-10deg); }
`

const earL = keyframes`
    50% { transform: rotateY(-30deg); }
`

const earR = keyframes`
    50% { transform: rotateY(30deg); }
`

const pawL = keyframes`
    50% {
        left: 130px;
        top: 176px;
    }   
    70% {
        top: 160px;
    }
`

const pawR = keyframes`
    25% {
        top: 160px;
    }
    50% {
        left: 88px;
        top: 176px;
    }
`

const Cat = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 5;
    width: 188px;
    height: 260px;
    margin-left: -99px;
    margin-top: -130px;
    color: ${({ theme }) => theme.colors.black};
    transform: scale(0.3);

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        transform: scale(0.5);
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        transform: scale(0.7);
    }
    
    &:before {
        position: absolute;
        content: '';
        top: 100%;
        left: 50%;
        width: 130px;
        height: 30px;
        margin-left: -50px;
        margin-top: -20px;
        background: ${({ theme }) => theme.colors.gray};
        opacity: .4;
        border-radius: 50%;
        animation: ${shadow} .45s infinite linear;
        animation-delay: .45s/2;
    }
    
    &:after {
        position: absolute;
        content: '';
        top: 100%;
        left: 100%;
        width: 15px;
        height: 10px;
        margin-left: -30px;
        margin-top: -10px;
        background: ${({ theme }) => theme.colors.gray};
        opacity: .3;
        border-radius: 50%;
        box-shadow: 
            50px 0 ${({ theme }) => theme.colors.gray},
            100px 0 ${({ theme }) => theme.colors.gray},
            150px 0 ${({ theme }) => theme.colors.gray},
            200px 0 ${({ theme }) => theme.colors.gray},
            250px 0 ${({ theme }) => theme.colors.gray},
            300px 0 ${({ theme }) => theme.colors.gray};
        
        animation: ${track} .45s infinite linear;
    }
`
    
const Paw = styled.div`
    position: absolute;
    top: 176px;
    left: 88px;
    width: 20px;
    height: 80px;
    background: currentcolor;
    border-radius: 20px / 0 0 80px 40px;
    transform: rotate(10deg);
    animation: ${pawL} .45s infinite linear;
            
    &:after {
        position: absolute;
        content: '';
        bottom: -5px;
        left: -4px;
        width: 20px;
        height: 26px;
        background: currentcolor;
        border-radius: 50%;
        transform: rotate(24deg);
    }
            
    &:nth-of-type(2) {
        left: 130px;
        animation: ${pawR} .45s infinite linear;
    }
`

const Shake = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    animation: ${shake} .45s infinite linear;
`
const Tail = styled.div`
    position: absolute;
    content: '';
    top: 0;
    right: -4px;
    width: 160px;
    height: 150px;
    border: 20px solid;
    border-color:
        currentcolor transparent
        transparent currentcolor;
    transform: rotate(45deg);
    border-radius: 120px / 106px 120px 0 120px;
    animation: ${tail} .45s infinite linear;

    &:after {
        position: absolute;
        content: '';
        width: 20px;
        height: 20px;
        background: currentcolor;
        border-radius: 50%;
        bottom: 0;
        box-shadow:
            2px 4px   currentcolor,
            2px 7px   currentcolor,
            2px 10px  currentcolor,
            1px 14px  currentcolor,
            -1px 18px  currentcolor,
            -5px 22px  currentcolor,
            -10px 25px currentcolor,
            -15px 28px currentcolor,
            -20px 30px currentcolor;
    }
`;

const Main = styled.div`
    position: absolute;
    top: 14px;
    right: 0;
    width: 144px;
    height: 216px;
    color: currentcolor;
`

const Head = styled.div`
    position: absolute;
    bottom: -10px;
    left: 20px;
    width: 104px;
    height: 180px;
    background: currentcolor;
    border-radius: 55px / 100px 100px 65px 65px;
    transform: rotate(40deg);
`

const Body = styled.div`
    position: absolute;
    right: 0;
    width: 130px;
    height: 180px;
    background: currentcolor;
    border-radius: 65px / 70px 70px 100px 100px;
`
    
const Leg = styled.div`
    position: absolute;
    right: -10px;
    top: 20px;
    width: 50px;
    height: 116px;
    background: currentcolor;
    border-radius: 25px / 0 60px 50px 0;
    
    &:before {
        position: absolute;
        content: '';
        bottom: -4px;
        right: 3px;
        width: 20px;
        height: 40px;
        border: 3px solid transparent;
        border-radius: 50%;
        border-left-color: ${({ theme }) => theme.colors.gray};
        transform: rotate(6deg);
    }
    
    &:after {
        position: absolute;
        content: '';
        left: 5px;
        bottom: 31px;
        width: 76px;
        height: 70px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-bottom-color: ${({ theme }) => theme.colors.gray};
        transform: rotate(65deg);
    }
`
    
const Face = styled.div`
    position: absolute;
    bottom: 0;
    width: 76px;
    height: 80px;
`
    
const Nose = styled.div`
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 18px;
    height: 9px;
    margin-left: -10px;
    background: ${({ theme }) => theme.colors.red};
    border-radius: 20px / 10px 10px 20px 20px;
`

const MustacheCont = styled.div`
    position: absolute;
    bottom: 5px;
    width: 20px;
    height: 10px;
    animation: ${mustacheL} .45s infinite linear;
    
    &:nth-of-type(2) {
        bottom: 12px;
        right: 0;
        transform: rotate(180deg);
        animation: ${mustacheR} .45s infinite linear;
    }
`
    
const MustacheLeft = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    transform-origin: 100% 0;
    transform: rotate(-10deg);
                        
    &:last-child {
        top: 6px;
        transform: rotate(-20deg);
    }
`

const MustacheRight = styled.div`
    position: absolute;
    top: 6px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    transform-origin: 100% 0;
    transform: rotate(-20deg);
`

const Eye = styled.div`
    position: absolute;
    top: 28px;
    left: -8px;
    width: 30px;
    height: 30px;
    background: ${({ theme }) => theme.colors.white};
    border: 3px solid ${({ theme }) => theme.colors.black};
    border-radius: 50%;
    
    &:nth-of-type(5) {
        top: 26px;
        left: 36px;
    }
    
    &:after {
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        right: 1px;
        top: 4px;
        background: ${({ theme }) => theme.colors.black};
        border-radius: 50%;
        animation: ${eye} .45s infinite linear;
    }
`
    
const BrowCont = styled.div`
    position: absolute;
    top: 14px;
    left: 10px;
    width: 10px;
    height: 10px;
    
    &:nth-of-type(7) {
        transform: rotateY(180deg);
        left: 38px;
    }
`
const Brow = styled.div`
    position: absolute;
    top: 20%;
    height: 60%;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    transform-origin: 100% 0;
    transform: rotate(10deg);
                        
    &:last-child {
        top: 0;
        height: 100%;
        left: 6px;
        transform: rotate(3deg);
    }
`
    
const EarLeft = styled.div`
    position: absolute;
    top: -17px;
    width: 20px;
    height: 30px;
    background: currentcolor;
    border-radius: 20px / 55px 55px 0 0;
    transform-origin: 50% 100%;
    overflow: hidden;
    transform: rotate(-20deg);
    animation: ${earL} .45s infinite linear;
`
    
const InnerLeft = styled.div`
    position: absolute;
    top: 5px;
    left: 50%;
    width: 6px;
    height: 14px;
    margin-left: -4px;
    background: ${({ theme }) => theme.colors.gray};
    border-radius: 7px / 20px 20px 0 0;
`
    
const EarRight = styled.div`
    position: absolute;
    right: 0;
    margin-top: -22px;
    width: 36px;
    height: 30px;
    transform-origin: 50% 100%;
    overflow: hidden;
    transform: rotate(20deg);
    animation: ${earR} .45s infinite linear;
`
    
const InnerRight = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 26px;
    margin-left: -6px;
    background: ${({ theme }) => theme.colors.gray};
    border-radius: 50%;
`
    
const Outer = styled.div`
    position: absolute;
    width: 30px;
    height: 200%;
    border: 3px solid ${({ theme }) => theme.colors.gray};
    border-radius: 20px / 55px 55px 0 0;
`
export { Backdrop, Cat, Paw, Shake, Main, Head, Body, Leg, Face, Nose, Tail, MustacheCont, MustacheLeft, MustacheRight, Eye, BrowCont, Brow, EarLeft, InnerLeft, EarRight, InnerRight, Outer };