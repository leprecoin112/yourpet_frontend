import { NavLink } from 'react-router-dom';
import { Wrapper, PrimaryButton, SecondaryButton } from './AuthNav.styled';
import IconPaw from '../Icons/IconPaw';

const AuthNav = () => {
  return (
    <Wrapper>
      <PrimaryButton className={NavLink} type="button" href="/login">
        Log IN
        <IconPaw />
      </PrimaryButton>
      <SecondaryButton className={NavLink} type="button" href="/register">
        Registration
      </SecondaryButton>
    </Wrapper>
  );
};

export default AuthNav;
