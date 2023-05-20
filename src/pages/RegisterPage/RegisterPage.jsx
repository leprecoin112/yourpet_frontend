import AuthForm from '../../shared/components/AuthForm';
import { useDispatch, useSelector, } from 'react-redux';
import {isAuth} from '../../shared/redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import {
  FormWrapper,
  FormTitle,
  RedirectLink,
  Link,
  PageContainer,
} from './RegisterPage.styled';

const RegisterPage = () => {
  const isLogin = useSelector(isAuth);

  if(isLogin){
    return <Navigate to="/user"/>
  }
  return (
    <PageContainer>
      <FormWrapper>
        <FormTitle>Registration</FormTitle>
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
