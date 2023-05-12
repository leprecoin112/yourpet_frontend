import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

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
  confirm: yup
    .string()
    .oneOf([yup.ref('pass'), null], 'Must match "password" field value')
    .required('Required'),
});
