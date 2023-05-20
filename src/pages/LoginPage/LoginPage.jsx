import AuthForm from '../../shared/components/AuthForm';
import { useDispatch, useSelector, } from 'react-redux';
import {isAuth} from '../../shared/redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { FormWrapper, FormTitle, RedirectLink, Link } from './LoginPage.styled';
import Section from '../../shared/components/Section/Section';
import Container from '../../shared/components/Container/Container';

const LoginPage = () => {
  const isLogin = useSelector(isAuth);

  if(isLogin){
    return <Navigate to="/user"/>
  }
  return (
    <Section>
      <Container>
        <FormWrapper>
          <FormTitle text="Login" />
          <AuthForm isLogin />
          <RedirectLink text="Don't have an account?" />
        </FormWrapper>
      </Container>
    </Section>
  );
};

export default LoginPage;
