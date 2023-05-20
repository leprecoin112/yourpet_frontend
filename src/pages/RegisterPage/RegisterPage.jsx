import { FormWrapper } from './RegisterPage.styled';
import Container from '../../shared/components/Container/Container';
import FormTitle from '../../shared/components/FormTitle/FormTitle';
import RedirectLink from '../../shared/components/RedirectLink/RedirectLink';

const RegisterPage = () => {
  return (
    <Container>
      <FormWrapper>
        <FormTitle text="Registration" />
        <RedirectLink text="Already have an account?" isLogin />
      </FormWrapper>
    </Container>
  );
};

export default RegisterPage;
