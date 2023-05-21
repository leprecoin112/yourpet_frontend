import { useState, useEffect } from "react";
import CongratsModal from "../../shared/components/CongratsModal/CongratsModal";
import { PageContainer } from "./UserPage.styled";
import UserData from "../../shared/components/UserData/UserData";
import PetsData from "../../shared/components/PetsData/PetsData";


const UserPage = () => {

  const [modalCongrats, setModalCongrats] = useState(true);

  useEffect(() => {
    if (modalCongrats) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    };

    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [modalCongrats]);

  const onClose = () => {
    setModalCongrats(!modalCongrats);
  }; 

  return (
    <PageContainer >
      <UserData />
      <PetsData/>
      {modalCongrats && <CongratsModal onClose={onClose} />}
    </PageContainer>
  )

}

export default UserPage;