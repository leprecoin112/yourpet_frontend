import AuthForm from '../../shared/components/AuthForm';
import {
  FormWrapper,
  FormTitle,
  RedirectLink,
  Link,
  PageContainer,
} from './LoginPage.styled';

const RegisterPage = () => {
  return (
    <PageContainer>
      <FormWrapper>
        <FormTitle>Login</FormTitle>
        <AuthForm isLogin />
        <RedirectLink>
          Don't have an account?&nbsp;
          <Link to="/register">Register</Link>
        </RedirectLink>
      </FormWrapper>
    </PageContainer>
  );
};

export default RegisterPage;
