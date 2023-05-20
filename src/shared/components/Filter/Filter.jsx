import { useState } from "react";
import Button from "../Button";
import { IconChevronUp, IconChevronDown, IconRound, IconCheckboxChecked } from '../Icons';
import {
    FilterButtonIcon,
    FilterButtonTitle,
    FiltersWrapper,
    FiltersTitle,
    FiltersType,
    FilterList,
    FilterItem
} from './Filter.styled';

const Filter = () => {
    const [openFilter, setOpenFilter] = useState(false);
    const [openByAge, setOpenByAge] = useState(false);
    const [openByGender, setOpenByGender] = useState(false);
    const [ages, setAges] = useState([]);
    const [genders, setGenders] = useState([]);

    const ageValues = ['3-12 m', '1 year', '2 years'];
    const genderValues = ['female', 'male'];

    const onFilter = () => {
        setOpenFilter(!openFilter);
    }

    const onOpenByAge = () => {
        setOpenByAge(!openByAge);
    }

    const onOpenByGender = () => {
        setOpenByGender(!openByGender);
    };

    const onAgeValueClick = value => {
        if (ages.includes(value)) {
            setAges(prevAges => prevAges.filter(age => age !== value));
        }
        else setAges(prevAges => [...prevAges, value]);
    };

    console.log(ages);

    const onGenderValueClick = value => {
        if (genders.includes(value)) {
            setGenders(prevGenders => prevGenders.filter(gender => gender !== value));
        }
        else setGenders(prevGenders => [...prevGenders, value]);
    };
    console.log(genders);

    return (
        <>
            <Button styled={openFilter ? ('filter on') : 'filter'} onClick={onFilter}><FilterButtonTitle>Filter</FilterButtonTitle><FilterButtonIcon /></Button>
            {openFilter && (
                <FiltersWrapper>
                    <FiltersTitle>Filters</FiltersTitle>
                    <FiltersType className={openByAge && 'opened'} onClick={onOpenByAge}>
                        {openByAge ? <IconChevronUp style={{marginRight: '20px'}} /> : <IconChevronDown style={{marginRight: '20px'}} /> }
                        By age
                    </FiltersType>
                    {openByAge && (
                        <FilterList>
                            {ageValues.map(value => (
                                <FilterItem key={value} onClick={() => onAgeValueClick(value)}>
                                    {ages.includes(value) ? <IconCheckboxChecked/> : <IconRound/>}{value}</FilterItem>
                            ))}
                        </FilterList>)
                    }
                    <FiltersType className={openByGender && 'opened'} style={{marginTop: '8px'}} onClick={onOpenByGender}>
                        {openByGender ? <IconChevronUp style={{marginRight: '20px'}} /> : <IconChevronDown style={{marginRight: '20px'}} /> }
                        By gender
                    </FiltersType>
                    {openByGender && (
                        <FilterList>
                            {genderValues.map(value => (
                                <FilterItem key={value} onClick={() => onGenderValueClick(value)}>
                                    {genders.includes(value) ? <IconCheckboxChecked/> : <IconRound/>}{value}</FilterItem>
                            ))}
                        </FilterList>)
                    }
                </FiltersWrapper>
            )}
        </>
    )
}

export default Filter;