import { FormWrapper } from './RegisterPage.styled';
import Container from '../../shared/components/Container/Container';
import FormTitle from '../../shared/components/FormTitle/FormTitle';
import RedirectLink from '../../shared/components/RedirectLink/RedirectLink';
import RegisterForm from '../../module/authForm/RegisterForm/RegisterForm';
import Section from '../../shared/components/Section/Section';
import { useRegisterMutation } from '../../shared/redux/api/backend/auth/authApi';
import { setCredentials } from '../../shared/redux/api/backend/auth/authSlice';
import { useDispatch } from 'react-redux';
import { schemaRegistration } from '../../shared/utils/validation/authValidationSchema';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const [register] = useRegisterMutation();
  const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    const user = { email, password };
    const response = await register(user);

    if (response.error) {
      toast.error(response.error.data.message);
    }

    console.log(response);

    dispatch(setCredentials(response.data));

    resetForm();
  };
  return (
    <Section>
      <Container>
        <FormWrapper>
          <FormTitle text="Registration" />
          <RegisterForm
            handleSubmit={handleSubmit}
            validationSchema={schemaRegistration}
          />
          <RedirectLink text="Already have an account?" isLogin />
        </FormWrapper>
      </Container>
    </Section>
  );
};

export default RegisterPage;
