import { Formik } from 'formik';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormContainer,
  FormInput,
  Error,
  InputWrapper,
  FormLabel,
  ShowPassword,
  SecureMsg,
  IconWrapper,
  BtnLogin,
} from '../AuthForm.styled';
import IconEyeClosed from '../../../shared/components/Icons/IconEyeClosed';
import IconEyeOpened from '../../../shared/components/Icons/IconEyeOpened';
import IconCheck from '../../../shared/components/Icons/IconCheck';
import IconCrossSmall from '../../../shared/components/Icons/IconCrossSmall';
export default function LoginForm({ handleSubmit, validationSchema }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
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
          </InputWrapper>
          <BtnLogin type="submit" disabled={isSubmitting}>
            Login
          </BtnLogin>
        </FormContainer>
      )}
    </Formik>
  );
}
