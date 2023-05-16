import React from 'react';
import { ClearButton, IconCross } from './ClearInputSearchButton.styled';

const ClearInputSearchButton = ({ onClick }) => {
  return (
    <ClearButton type="button" title="Clear" onClick={e => onClick(e)}>
      {/* <ClearIcon aria-label="Close icon">
        <use href={`${icons}#icon-close`} />
      </ClearIcon> */}
      <IconCross />
    </ClearButton>
  );
};

export default ClearInputSearchButton;
