import AuthForm from '../../shared/components/AuthForm';
import { useSelector } from 'react-redux';
import { isUserLogin } from '../../shared/redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import {
  FormWrapper,
  FormTitle,
  RedirectLink,
  Link,
  PageContainer,
} from './RegisterPage.styled';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);
  if (isLogin) {
    return <Navigate to="/user"/>
  }
  return (
    <PageContainer>
      <FormWrapper>
        <FormTitle>Registration</FormTitle>
        <AuthForm />
        <RedirectLink>
          Already have an account?
          <Link to="/login">Login</Link>
        </RedirectLink>
      </FormWrapper>
    </PageContainer>
  );
};

export default RegisterPage;
