import React, { useState } from 'react';
import { IconEyeClosed } from '../Icons';
import { IconEyeOpened } from '../Icons';
import { FormInput } from '../FormInput/FormInput.styled';

const PasswordShowHide = props => {
  const [showHidePassword, changeShowHidePassword] = useState(false);
  return (
    <>
      <button onClick={() => changeShowHidePassword(!showHidePassword)}>
        {!showHidePassword ? <IconEyeClosed /> : <IconEyeOpened />}
      </button>
      <FormInput type={showHidePassword ? 'text' : 'password'} />
    </>
  );
};

export default PasswordShowHide;
