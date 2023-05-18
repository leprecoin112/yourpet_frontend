import { Formik, Field } from 'formik';

import { FormInput, Error, InputWrapper } from './FormInput.styled';
import IconCheck from '../Icons/IconCheck';
import IconCrossBig from '../Icons/IconCrossBig';
const Input = ({ type, name, meta, placeholder, ...props }) => {
  return (
    <InputWrapper>
      <FormInput name={name} type={type} placeholder={placeholder} {...props} />
      <Error component="div" name={name} />

      {/* {Formik.touched.name && !Formik.errors.name && <IconCheck />}
      {Formik.touched.name && Formik.errors.name && <IconCrossBig />} */}
    </InputWrapper>
  );
};

export default Input;
