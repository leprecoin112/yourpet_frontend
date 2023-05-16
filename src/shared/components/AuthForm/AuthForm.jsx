import { Formik } from 'formik';
import * as yup from 'yup';
//import { useDispatch, useSelector } from 'react-';
//import { NavLink, useLocation } from 'react-router-dom';
import { FormContainer, FormInput, Btn, InputWrapper } from './AuthForm.styled';
const schemaRegistration = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  password: yup
    .string()
    .min(6, 'password must contain at least 6  characters')
    .max(16, 'password can not contain more then 16 characters')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .required('Required'),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Must match "password" field value')
    .required('Required'),
});
const schemaLogin = yup.object().shape({
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
export default function AuthForm({ isLogin }) {
  //   const dispatch = useDispatch();
  const authSchema = isLogin ? schemaLogin : schemaRegistration;
  const handleSubmit = () => {
    console.log('submit');
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirm: '',
      }}
      validationSchema={authSchema}
      onSubmit={handleSubmit}
    >
      {props => (
        <FormContainer>
          <InputWrapper>
            <FormInput type="email" name="email" placeholder="Email" />
            <FormInput type="password" name="password" placeholder="Password" />
            {!isLogin && (
              <FormInput
                type="password"
                name="confirm"
                placeholder="Confirm Password"
              />
            )}
          </InputWrapper>
          <Btn type="submit">{isLogin ? 'Login' : 'Registration'}</Btn>
        </FormContainer>
      )}
    </Formik>
  );
}
