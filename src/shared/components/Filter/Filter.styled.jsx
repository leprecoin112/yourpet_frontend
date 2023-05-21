import styled from '@emotion/styled';
import IconFilter from '../Icons/IconFilters3';

const FilterButtonIcon = styled(IconFilter)`
    stroke: ${({ theme }) => theme.colors.blue};

    .filter:hover &,
    .filter.on &  {
        stroke: ${({ theme }) => theme.colors.white};
    }
`

const FilterButtonTitle = styled.span`
    display: none;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: inline;
        margin-right: ${({ theme }) => theme.space[3] + 'px'};
        font-family: ${({ theme }) => theme.fonts.main.bold};
        font-size: ${({ theme }) => theme.fontSizes[2]};
        line-height: ${({ theme }) => (22 / Number(theme.fontSizes[2].slice(0, 2))).toFixed(1)};
        letter-spacing: 0.04em;
        color: ${({ theme }) => theme.colors.blue};

        .filter:hover &,
        .filter.on & {
            color: ${({ theme }) => theme.colors.white};
        }
    }
`;

const FiltersWrapper = styled.div`
    position: absolute;
    top: 40px;
    right: 0;
    z-index: 3;
    padding: ${({ theme }) => theme.space[3] + 'px'};
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.boxShadows.main};
    background-color: ${({ theme }) => theme.colors.white};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}){
        left: 0;
        right: auto;
    }

`;

const FiltersTitle = styled.h3`
    margin-bottom: ${({ theme }) => theme.space[3] + 'px'};
    font-family: ${({ theme }) => theme.fonts.main.bold};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => (22 / Number(theme.fontSizes[2].slice(0, 2))).toFixed(1)};
    letter-spacing: 0.04em;
    color: ${({ theme }) => theme.colors.blue};
`

const FiltersType = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 136px;
    padding: 4px 8px;

    border: none;
    border-radius: 20px;

    font-family: ${({ theme }) => theme.fonts.secondary.regular};
    font-size: 14px;
    line-height: 130%;

    background-color: ${({ theme }) => theme.colors.lightBlue};
    color: ${({ theme }) => theme.colors.blue};
    stroke: ${({ theme }) => theme.colors.blue};
    cursor: pointer;

    transition: stroke ${({ theme }) => theme.duration.main} ${({ theme }) => theme.transition.main},
                color ${({ theme }) => theme.duration.main} ${({ theme }) => theme.transition.main};

    &.opened {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.light};
        stroke: ${({ theme }) => theme.colors.light};
    }
`

const FilterList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[3] + 'px'};
    width: 136px;
    padding-bottom: 8px;
    padding-left: 38px;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    background-color: ${({ theme }) => theme.colors.lightBlue};

    font-family: ${({ theme }) => theme.fonts.secondary.regular};
    font-size: ${({ theme }) => theme.fontSizes[0]};
    line-height: 130%;
`

const FilterItem = styled.li`
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.blue};
    stroke: ${({ theme }) => theme.colors.blue};
    transition: stroke ${({ theme }) => theme.duration.main}
                ${({ theme }) => theme.transition.main};

    &:hover {
        stroke: ${({ theme }) => theme.colors.light};
    }
`

export {
    FilterButtonIcon,
    FilterButtonTitle,
    FiltersWrapper,
    FiltersTitle,
    FiltersType,
    FilterList,
    FilterItem
};