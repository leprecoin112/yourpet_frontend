import AuthForm from '../../shared/components/AuthForm';
import {
  FormWrapper,
  FormTitle,
  RedirectLink,
  Link,
} from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <FormWrapper>
      <FormTitle>Registration</FormTitle>
      <AuthForm />
      <RedirectLink>
        Already have an account?
        <Link to="/login">Login</Link>
      </RedirectLink>
    </FormWrapper>
  );
};

export default RegisterPage;
