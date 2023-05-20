import { FormWrapper } from './LoginPage.styled';
import Section from '../../shared/components/Section/Section';
import Container from '../../shared/components/Container/Container';
import RedirectLink from '../../shared/components/RedirectLink/RedirectLink';
import FormTitle from '../../shared/components/FormTitle/FormTitle';
import LoginForm from '../../module/authForm/LoginForm/LoginForm';
import { schemaLogin } from '../../shared/utils/validation/authValidationSchema';
import { useLoginMutation } from '../../shared/redux/api/backend/auth/authApi';
import { setCredentials } from '../../shared/redux/api/backend/auth/authSlice';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    const user = { email, password };
    const response = await login(user);

    dispatch(setCredentials(response.data));

    resetForm();
  };
  return (
    <Section>
      <Container>
        <FormWrapper>
          <FormTitle text="Login" />
          <LoginForm
            handleSubmit={handleSubmit}
            validationSchema={schemaLogin}
          />
          <RedirectLink text="Don't have an account?" />
        </FormWrapper>
      </Container>
    </Section>
  );
};

export default LoginPage;
