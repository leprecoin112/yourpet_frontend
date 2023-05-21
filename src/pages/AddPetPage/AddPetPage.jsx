import { AddPetWrapper } from './AddPetPage.styled';
import { ChooseOption } from '../../shared/components/AddPetForm/Step1/AddPetForm1';
import { PersonalDetails } from '../../shared/components/AddPetForm/step2/AddPetForm2';

const AddPetPage = () => {
  return (
    <AddPetWrapper>
      <PersonalDetails />
    </AddPetWrapper>
  );
};

export default AddPetPage;
