import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { NavLink, useLocation } from 'react-router-dom';
import {
  FormContainer,
  Btn,
  FormInput,
  Error,
  InputWrapper,
  FormLabel,
  ShowPassword,
  SecureMsg,
  IconWrapper,
} from './AuthForm.styled';
import IconEyeClosed from '../Icons/IconEyeClosed';
import IconEyeOpened from '../Icons/IconEyeOpened';
import IconCheck from '../Icons/IconCheck';
import IconCrossSmall from '../Icons/IconCrossSmall';
import { schemaRegistration, schemaLogin } from './YupSchema';
import { register, logIn } from '../../redux/auth/operations';
export default function AuthForm({ isLogin }) {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const authSchema = isLogin ? schemaLogin : schemaRegistration;
  const handleRegister = ({ email, password }, { resetForm }) => {
    dispatch(register({ email, password }));
    resetForm();
  };
  // const handleLogin = ({ email, password }, { resetForm }) => {
  //   dispatch(logIn({ email, password }));
  //   resetForm();
  // };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirm: '',
      }}
      validationSchema={authSchema}
      onSubmit={handleRegister}
    >
      {({ errors, touched, isSubmitting }) => (
        <FormContainer>
          <InputWrapper>
            <FormLabel htmlFor="email">
              <FormInput
                type="email"
                name="email"
                placeholder="Email"
                validate={touched.email && !errors.email}
                unvalidate={touched.email && errors.email}
              />
              {touched.email && !errors.email && (
                <IconWrapper>
                  <IconCheck color="green" />
                </IconWrapper>
              )}
              {touched.email && errors.email && (
                <IconWrapper>
                  <IconCrossSmall color="red" />
                </IconWrapper>
              )}
              <Error component="div" name="email" />
            </FormLabel>
            <FormLabel htmlFor="password">
              <FormInput
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                validate={touched.password && !errors.password}
                unvalidate={touched.password && errors.password}
              />
              <ShowPassword
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IconEyeOpened /> : <IconEyeClosed />}
              </ShowPassword>
              <Error component="div" name="password" />
              {touched.password && !errors.password && (
                <SecureMsg>Password is secure</SecureMsg>
              )}
            </FormLabel>

            {!isLogin && (
              <FormLabel htmlFor="confirm">
                <FormInput
                  type={showPassword ? 'text' : 'password'}
                  name="confirm"
                  placeholder="Confirm Password"
                  validate={touched.confirm && !errors.confirm}
                  unvalidate={touched.confirm && errors.confirm}
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
          <Btn type="submit" disabled={isSubmitting}>
            {isLogin ? 'Login' : 'Registration'}
          </Btn>
        </FormContainer>
      )}
    </Formik>
  );
}
