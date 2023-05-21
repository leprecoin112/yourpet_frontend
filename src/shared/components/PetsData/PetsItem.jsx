
import { PetItemWrapper, PetPhoto, PetInfoTitle, PetInfo, PetInfoContainer, DeleteBtn, ModalDeleteText } from "./PetsItem.styled";
import IconTrash from '../Icons/IconTrash';
import { useState } from "react";
import ModalApproveAction from "../ModalApproveAction/ModalApproveAction";

export const PetsItem = ({petData}) => {
  const [trashClick, setTrashClick] = useState(false);

  const handleDeleteClick = () => {
    setTrashClick(!trashClick);
  };

  const handleDeletePetItem = () => {
    // ТУТ ЩОСЬ МАЄ БУТИ З БЕКОМ
  };


  return (
  <PetItemWrapper>
    <PetPhoto src={petData.photo} alt={petData.breed}/>
    <PetInfoContainer>
      <PetInfoTitle>Name:<PetInfo>{petData.name}</PetInfo></PetInfoTitle>
      <PetInfoTitle>Date of birth:<PetInfo>{petData.birth}</PetInfo></PetInfoTitle>
      <PetInfoTitle>Breed:<PetInfo>{petData.breed}</PetInfo></PetInfoTitle>
      <PetInfoTitle>Comments:<PetInfo>{petData.comments}</PetInfo></PetInfoTitle>
      <DeleteBtn onClick={handleDeleteClick}><IconTrash/></DeleteBtn>
      {trashClick && <ModalApproveAction toggleModal={handleDeleteClick} onYes={handleDeletePetItem} children={<ModalDeleteText>Are you sure?</ModalDeleteText>} icon={<IconTrash/>}/>}
    </PetInfoContainer>
  </PetItemWrapper>
  )
};

