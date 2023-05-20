
import Logout from "../Logout/Logout";
import UserDataItem from "../UserDataItem/UserDataItem";
import { Title, UserDataWrapper } from "./UserData.styled";

const UserData = () => {
  return <div>
    <Title>My information:</Title>
    <UserDataWrapper>
      <UserDataItem />
      <Logout/>
    </UserDataWrapper>
  </div>
};

export default UserData;