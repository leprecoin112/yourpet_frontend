import AuthForm from '../../shared/components/AuthForm';
import { FormWrapper, RedirectLink, Link } from './LoginPage.styled';
import FormTitle from '../../shared/components/FormTitile';
import Section from '../../shared/components/Section/Section';
import Container from '../../shared/components/Container/Container';

const LoginPage = () => {
  return (
    <Section>
      <Container>
        <FormWrapper>
          <FormTitle text="Login" />
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

export default LoginPage;
