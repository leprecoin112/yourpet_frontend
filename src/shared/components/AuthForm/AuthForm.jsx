import { Formik } from 'formik';
import * as yup from 'yup';
//import { useDispatch, useSelector } from 'react-';
//import { NavLink, useLocation } from 'react-router-dom';
import Input from '../FormInput';
import { FormContainer, Btn, InputWrapper } from './AuthForm.styled';

const schema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  password: yup
    .string()
    .min(6, 'Password requires min 6  characters')
    .max(16, 'Password requires max 16 characters')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .required('Required'),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Must match "password" field value')
    .required('Required'),
});

function getStyles(touched, error) {
  if (touched && !error) {
    return {
      border: '2px solid #00C3AD',
    };
  } else if (touched && error) {
    return {
      border: '2px solid #F43F5E',
    };
  }
}

export default function RegisterForm() {
  //   const dispatch = useDispatch();
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
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {props => (
        <FormContainer>
          <InputWrapper>
            <Input
              style={getStyles(
                props.getFieldMeta('email').touched,
                props.getFieldMeta('email').error
              )}
              type="email"
              name="email"
              placeholder="Email"
            />

            <Input
              style={getStyles(
                props.getFieldMeta('password').touched,
                props.getFieldMeta('password').error
              )}
              type="password"
              name="password"
              placeholder="Password"
            />
            <Input
              style={getStyles(
                props.getFieldMeta('confirm').touched,
                props.getFieldMeta('confirm').error
              )}
              type="password"
              name="confirm"
              placeholder="Confirm Password"
            />
          </InputWrapper>
          <Btn type="submit">Registration</Btn>
        </FormContainer>
      )}
    </Formik>
  );
}
