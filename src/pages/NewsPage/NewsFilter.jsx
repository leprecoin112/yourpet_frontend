import PropTypes from 'prop-types';
import CustomSearchComponent from '../../shared/components/SearchComponent/SearchComponent';

export default function NewsFilter({
    input,
    onChange,
    resetInput,
    inputValue,
}) {
    return (
        <CustomSearchComponent
            input={input}
            onChange={onChange}
            resetInput={resetInput}
            inputValue={inputValue}
        />
    );
}

NewsFilter.propTypes = {
    input: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};








