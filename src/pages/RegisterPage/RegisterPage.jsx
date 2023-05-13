import AuthForm from '../../shared/components/AuthForm';
import {
  FormWrapper,
  FormTitle,
  RedirectLink,
  Link,
  PageContainer,
} from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <PageContainer>
      <FormWrapper>
        <FormTitle>Registration</FormTitle>
        <AuthForm />
        <RedirectLink>
          Already have an account?
          <Link to="/login">Login</Link>
        </RedirectLink>
      </FormWrapper>
    </PageContainer>
  );
};

export default RegisterPage;
