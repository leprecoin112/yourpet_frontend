import AuthForm from '../../shared/components/AuthForm';
import { FormWrapper, PageContainer } from './RegisterPage.styled';
import FormTitle from '../../shared/components/FormTitile';
import RedirectLink from '../../shared/components/RedirectLink';

const RegisterPage = () => {
  return (
    <PageContainer>
      <FormWrapper>
        <FormTitle text="Registration" />
        <AuthForm />
        <RedirectLink text="Already have an account?" isLogin />
      </FormWrapper>
    </PageContainer>
  );
};

export default RegisterPage;
