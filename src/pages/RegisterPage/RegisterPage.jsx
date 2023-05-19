import AuthForm from '../../shared/components/AuthForm';
import {
  FormWrapper,
  RedirectLink,
  Link,
  PageContainer,
} from './RegisterPage.styled';
import FormTitle from '../../shared/components/FormTitile';
const RegisterPage = () => {
  return (
    <PageContainer>
      <FormWrapper>
        <FormTitle text="Registration" />
        <AuthForm />
        <RedirectLink>
          Already have an account?&nbsp;
          <Link to="/login">Login</Link>
        </RedirectLink>
      </FormWrapper>
    </PageContainer>
  );
};

export default RegisterPage;
