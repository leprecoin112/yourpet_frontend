import { RedirectText, Link } from './RedirectLink.styled';

const RedirectLink = ({ text, isLogin }) => {
  return (
    <RedirectText>
      {text}&nbsp;
      {isLogin ? (
        <Link to="/login">Login</Link>
      ) : (
        <Link to="/register">Register</Link>
      )}
    </RedirectText>
  );
};

export default RedirectLink;
