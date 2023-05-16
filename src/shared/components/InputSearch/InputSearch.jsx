import React from 'react';
import {
  InputStyled,
  BtnSearch,
  InputContainer,
  Icon,
} from './InputSearch.styled';
import ClearInputSearchButton from '../ClearInputSearchButton/ClearInputSearchButton';

const InputSearch = ({ onSubmit, onClick, query }) => {
  return (
    <InputContainer id="searchForm">
      <InputStyled placeholder="Search" type="text" name="search">
        {/* {query && (
          <ClearInputSearchButton
            onClick={e => onClick(e)}
            query={query}
          ></ClearInputSearchButton>
        )} */}
      </InputStyled>

      <ClearInputSearchButton
        onClick={e => onClick(e)}
        query={query}
      ></ClearInputSearchButton>

      <BtnSearch title="Search" onClick={e => onSubmit(e)}>
        <Icon />
      </BtnSearch>
    </InputContainer>
  );
};

export default InputSearch;
