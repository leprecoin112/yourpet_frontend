import IconLogout from "../Icons/IconLogout";
import ModalApproveAction from "../ModalApproveAction/ModalApproveAction";
import { LogoutBtn } from "./Logout.styled";
import { useState } from "react";

const Logout = () => {
  const [logout, setLogout] = useState(false);


  const handleLogout = () => {
    setLogout(true);
  };

  const onClose = () => {
    setLogout(false);
  }


  return <>
    {logout && <ModalApproveAction onClose={onClose} text='Already leaving?' redirect='/login'/>}
    <LogoutBtn onClick={handleLogout}>
      <IconLogout />
      Log Out
    </LogoutBtn>
  </>
};


export default Logout;
