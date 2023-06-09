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
import { useLocation } from 'react-router-dom';

const LoginPage = () => {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    const user = { email, password };
    const response = await login(user);

    dispatch(setCredentials(response.data));
    location.state.from = '/login';

    resetForm();
  };
  const steps = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
  ];
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
