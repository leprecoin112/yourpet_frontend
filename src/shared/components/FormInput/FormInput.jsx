import { FormInput, Error, InputWrapper } from './FormInput.styled';

const Input = ({ type, name, placeholder, ...rest }) => {
  return (
    <InputWrapper>
      <FormInput name={name} type={type} placeholder={placeholder} {...rest} />
      <Error component="div" name={name} />
    </InputWrapper>
  );
};

export default Input;
