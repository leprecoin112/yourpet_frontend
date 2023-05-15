import React from 'react';
import PropTypes from 'prop-types';
import { SearchComponent, SearchInput } from './SearchComponent.styled';
import IconSearch from '../Icons/IconSearch';

export default function CustomSearchComponent({
    input,
    onChange,
    resetInput,
    inputValue,
}) {
    return (
        <SearchComponent>
            <SearchInput
                type="text"
                placeholder="Search"
                name="filter"
                onInput={onChange}
                value={input}
            />
            {inputValue && (
                <div onClick={() => resetInput()}>
                    <IconSearch />
                </div>
            )}
            {!inputValue && <IconSearch />}
        </SearchComponent>
    );
}

CustomSearchComponent.propTypes = {
    input: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};