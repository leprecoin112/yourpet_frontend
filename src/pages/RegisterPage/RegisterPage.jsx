import AuthForm from '../../shared/components/AuthForm';

import { useDispatch, useSelector } from 'react-redux';
import { isAuth } from '../../shared/redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { FormWrapper } from './RegisterPage.styled';
import Container from '../../shared/components/Container/Container';
import FormTitle from '../../shared/components/FormTitle/FormTitle';
import RedirectLink from '../../shared/components/RedirectLink/RedirectLink';

const RegisterPage = () => {
  const isLogin = useSelector(isAuth);

  if (isLogin) {
    return <Navigate to="/user" />;
  }
  return (
    <Container>
      <FormWrapper>
        <FormTitle text="Registration" />
        <AuthForm />
        <RedirectLink text="Already have an account?" isLogin />
      </FormWrapper>
    </Container>
  );
};

export default RegisterPage;
