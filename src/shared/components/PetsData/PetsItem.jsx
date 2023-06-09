import {
  PetItemWrapper,
  PetPhoto,
  PetInfoTitle,
  PetInfo,
  PetInfoContainer,
  DeleteBtn,
  ModalDeleteText,
} from './PetsItem.styled';
import IconTrash from '../Icons/IconTrash';
import { useState } from 'react';
import ModalApproveAction from '../ModalApproveAction/ModalApproveAction';
import { useDeletePetsMutation } from '../../redux/api/backend/pets/petsApi';

export const PetsItem = ({ petData }) => {
  const [deletePets] = useDeletePetsMutation();
  const [trashClick, setTrashClick] = useState(false);

  const handleDeleteClick = () => {
    setTrashClick(!trashClick);
  };

  const handleDeletePetItem = async () => {
    await deletePets(petData._id);
    handleDeleteClick();
  };

  return (
    <PetItemWrapper>
      <PetPhoto src={petData.avatarURL} alt={petData.breed} />
      <PetInfoContainer>
        <PetInfoTitle>
          Name:<PetInfo>{petData.name}</PetInfo>
        </PetInfoTitle>
        <PetInfoTitle>
          Date of birth:<PetInfo>{petData.birthday}</PetInfo>
        </PetInfoTitle>
        <PetInfoTitle>
          Breed:<PetInfo>{petData.breed}</PetInfo>
        </PetInfoTitle>
        <PetInfoTitle>
          Comments:<PetInfo>{petData.comments}</PetInfo>
        </PetInfoTitle>
        <DeleteBtn onClick={handleDeleteClick}>
          <IconTrash />
        </DeleteBtn>
        {trashClick && (
          <ModalApproveAction
            toggleModal={handleDeleteClick}
            onYes={handleDeletePetItem}
            children={<ModalDeleteText>Are you sure?</ModalDeleteText>}
            icon={<IconTrash />}
          />
        )}
      </PetInfoContainer>
    </PetItemWrapper>
  );
};
