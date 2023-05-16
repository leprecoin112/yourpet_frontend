import LoginForm from '../../shared/components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { isUserLogin } from '../../shared/redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import {
  FormWrapper,
  FormTitle,
  RedirectLink,
  Link,
  PageContainer,
} from './LoginPage.styled';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  if (isLogin) {
    return <Navigate to="/user"/>
  }
  return (
    <PageContainer>
      <FormWrapper>
        <FormTitle>Logion</FormTitle>
        <LoginForm />
        <RedirectLink>
          Already have an account?
          <Link to="/register">Registration</Link>
        </RedirectLink>
      </FormWrapper>
    </PageContainer>
  );
};

export default LoginPage;
