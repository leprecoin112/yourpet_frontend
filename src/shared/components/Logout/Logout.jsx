import IconLogout from '../Icons/IconLogout';
import ModalApproveAction from '../ModalApproveAction/ModalApproveAction';
import { LogoutBtn } from './Logout.styled';
import { useState } from 'react';
import { useLogoutMutation } from '../../redux/api/backend/auth/authApi';

const Logout = () => {
  const [isLogout, setIsLogout] = useState(false);
  const [logout] = useLogoutMutation();

  const handleApprove = () => {
    setIsLogout(true);
  };

  const handleLogout = async () => {
    await logout();
  };

  const onClose = () => {
    setIsLogout(false);
  };

  return (
    <>
      {isLogout && (
        <ModalApproveAction
          toggleModal={onClose}
          text="Already leaving?"
          redirect="/main"
          onYes={handleLogout}
        />
      )}
      <LogoutBtn onClick={handleApprove}>
        <IconLogout />
        Log Out
      </LogoutBtn>
    </>
  );
};

export default Logout;
