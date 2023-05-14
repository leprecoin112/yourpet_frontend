import { Wrapper, RegisterButton, LoginButton } from './AuthNav.styled';
import { IconPaw } from '../../Icons';

const AuthNav = () => {
  return (
    <Wrapper>
      <LoginButton to="/login">
        Log IN
        <IconPaw />
      </LoginButton>
      <RegisterButton to="/register">Registration</RegisterButton>
    </Wrapper>
  );
};

export default AuthNav;
