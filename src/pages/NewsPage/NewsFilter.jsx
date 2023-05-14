import PropTypes from 'prop-types';
import { SearchComponent, SearchInput } from './NewsFilter.styled';
import IconSearch from '../../shared/components/Icons/IconSearch';

export default function NewsFilter({
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

NewsFilter.propTypes = {
    input: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};