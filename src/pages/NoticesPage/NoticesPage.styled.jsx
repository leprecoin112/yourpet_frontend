import styled from '@emotion/styled';
import PageHeading from '../../shared/components/PageHeading';

const Heading = styled(PageHeading)`
    margin-top: 40px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}){
        margin-top: 80px;
    }
`;

const ErrorMessage = styled.p`
    margin-top: 40px;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray};

    font-family: ${({ theme }) => theme.fonts.main.medium};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) =>
        (22 / Number(theme.fontSizes[2].slice(0, 2))).toFixed(1)};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-top: 80px;
        font-size: ${({ theme }) => theme.fontSizes[6]};
        line-height: ${({ theme }) =>
        (44 / Number(theme.fontSizes[4].slice(0, 2))).toFixed(1)};
    }
`;

const FiltersWrapper = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}){
        margin-top: 40px;
    }
`

const ButtonsWrapper = styled.div`
    position: relative;


    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: flex;
        gap: 12px;
    }
`;
const MobileAddButton = styled.button`
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

    background: ${({ theme }) => theme.colors.gradientBlue};
    border: none;
    border-radius: 50%;

    cursor: pointer;

    stroke: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};

    font-family: ${({ theme }) => theme.fonts.main.semiBold};
    font-size: ${({ theme }) => theme.fontSizes[0]};
    line-height: ${({ theme }) => (16 / Number(theme.fontSizes[0].slice(0, 2))).toFixed(1)}; 

    &:hover {
        background: ${({ theme }) => theme.colors.blue};
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
    }
`;

const AddButton = styled.button`
    display: none;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 129px;
        height: 40px;
        padding: 9px 16px;

        font-family: ${({ theme }) => theme.fonts.main.bold};
        font-size: ${({ theme }) => theme.fontSizes[2]};
        line-height: ${({ theme }) => (22 / Number(theme.fontSizes[2].slice(0, 2))).toFixed(1)}; 
        background: ${({ theme }) => theme.colors.blue};
        stroke: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.white};
        border: none;
        border-radius: 40px;

        cursor: pointer;

        &:hover {
            background: ${({ theme }) => theme.colors.gradientBlue};
        }
    }
`;

export {
    Heading,
    ErrorMessage,
    ButtonsWrapper,
    MobileAddButton,
    AddButton,
    FiltersWrapper,
};