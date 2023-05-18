import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
//import { useDispatch, useSelector } from 'react-';
//import { NavLink, useLocation } from 'react-router-dom';
import {
  FormContainer,
  Btn,
  FormInput,
  Error,
  InputWrapper,
  FormLabel,
  ShowPassword,
} from './AuthForm.styled';
import IconEyeClosed from '../Icons/IconEyeClosed';
import IconEyeOpened from '../Icons/IconEyeOpened';

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
  const [showPassword, setShowPassword] = useState(false);
  const authSchema = isLogin ? schemaLogin : schemaRegistration;
  const handleSubmit = ({ email, password }) => {
    console.log({ email, password });
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
      {({
        values,
        errors,
        touched,
        handleSubmit,
        isSubmitting,
        validating,
        valid,
      }) => (
        <FormContainer>
          <InputWrapper>
            <FormLabel htmlFor="email">
              <FormInput
                type="email"
                name="email"
                placeholder="Email"
                valid={touched.email && !errors.email}
                error={touched.email && errors.email}
              />
              <Error component="div" name="email" />
            </FormLabel>
            <FormLabel htmlFor="password">
              <FormInput
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                valid={touched.password && !errors.password}
                error={touched.password && errors.password}
              />
              <ShowPassword
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IconEyeOpened /> : <IconEyeClosed />}
              </ShowPassword>
              <Error component="div" name="password" />
            </FormLabel>

            {!isLogin && (
              <FormLabel htmlFor="confirm">
                <FormInput
                  type={showPassword ? 'text' : 'password'}
                  name="confirm"
                  placeholder="Confirm Password"
                  valid={touched.confirm && !errors.confirm}
                  error={touched.confirm && errors.confirm}
                />
                <ShowPassword
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IconEyeOpened /> : <IconEyeClosed />}
                </ShowPassword>
                <Error component="div" name="confirm" />
              </FormLabel>
            )}
          </InputWrapper>
          <Btn type="submit">{isLogin ? 'Login' : 'Registration'}</Btn>
        </FormContainer>
      )}
    </Formik>
  );
}
