import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
//import { NavLink, useLocation } from 'react-router-dom';
import { FormContainer, FormInput, Btn, InputWrapper } from './LoginForm.styled';
const schema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  password: yup
    .string()
    .min(6, 'password must contain at least 6  characters')
    .max(16, 'password can not contain more then 16 characters')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .required('Required'),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (data) => {
    dispatch(login(data));
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <InputWrapper>
          <FormInput type="email" name="email" placeholder="Email" required />
          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </InputWrapper>
        <Btn type="submit">Login</Btn>
      </FormContainer>
    </Formik>
  );
}
