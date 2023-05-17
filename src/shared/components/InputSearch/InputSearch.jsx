import React from 'react';
import {
  InputStyled,
  BtnSearch,
  InputContainer,
  Icon,
  ClearButton,
  IconCross,
} from './InputSearch.styled';

const InputSearch = ({ onSubmit, onClick, query }) => {
  return (
    <InputContainer id="searchForm">
      <InputStyled placeholder="Search" type="text" name="search" />
      <BtnSearch id="btnSearch" title="Search" onClick={e => onSubmit(e)}>
        <Icon />
      </BtnSearch>
      {query && (
        <ClearButton
          type="button"
          title="Clear"
          onClick={e => onClick(e)}
          query={query}
        >
          <IconCross />
        </ClearButton>
      )}
    </InputContainer>
  );
};

export default InputSearch;
