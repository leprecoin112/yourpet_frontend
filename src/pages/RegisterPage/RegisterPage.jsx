import { FormWrapper } from './RegisterPage.styled';
import Container from '../../shared/components/Container/Container';
import FormTitle from '../../shared/components/FormTitle/FormTitle';
import RedirectLink from '../../shared/components/RedirectLink/RedirectLink';
import RegisterForm from '../../module/authForm/RegisterForm/RegisterForm';
import Section from '../../shared/components/Section/Section';

const RegisterPage = () => {
  return (
    <Section>
      <Container>
        <FormWrapper>
          <FormTitle text="Registration" />
          <RegisterForm />
          <RedirectLink text="Already have an account?" isLogin />
        </FormWrapper>
      </Container>
    </Section>
  );
};

export default RegisterPage;
