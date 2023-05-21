import Logout from '../Logout/Logout';
import UserDataItem from '../UserDataItem/UserDataItem';
import { Title, UserDataWrapper } from './UserData.styled';
import { useGetUserQuery } from '../../redux/api/backend/user/userApi';

const UserData = () => {
  const { data: user } = useGetUserQuery();
  return (
    <div>
      <Title>My information:</Title>
      <UserDataWrapper>
        <UserDataItem user={user} />
        <Logout />
      </UserDataWrapper>
    </div>
  );
};

export default UserData;
