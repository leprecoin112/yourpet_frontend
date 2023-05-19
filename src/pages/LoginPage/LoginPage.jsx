import AuthForm from '../../shared/components/AuthForm';
import { FormWrapper } from './LoginPage.styled';
import FormTitle from '../../shared/components/FormTitile';
import Section from '../../shared/components/Section/Section';
import Container from '../../shared/components/Container/Container';
import RedirectLink from '../../shared/components/RedirectLink';
const LoginPage = () => {
  return (
    <Section>
      <Container>
        <FormWrapper>
          <FormTitle text="Login" />
          <AuthForm isLogin />
          <RedirectLink text="Don't have an account?" />
        </FormWrapper>
      </Container>
    </Section>
  );
};

export default LoginPage;
