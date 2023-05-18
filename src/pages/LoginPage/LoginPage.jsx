import AuthForm from '../../shared/components/AuthForm';
import { FormWrapper, FormTitle, RedirectLink, Link } from './LoginPage.styled';
import Section from '../../shared/components/Section/Section';
import Container from '../../shared/components/Container/Container';

const RegisterPage = () => {
  return (
    <Section>
      <Container>
        <FormWrapper>
          <FormTitle>Login</FormTitle>
          <AuthForm isLogin />
          <RedirectLink>
            Don't have an account?&nbsp;
            <Link to="/register">Register</Link>
          </RedirectLink>
        </FormWrapper>
      </Container>
    </Section>
  );
};

export default RegisterPage;
