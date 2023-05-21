
import IconPlusSmall from "../Icons/IconPlusSmall";
import {
  Title,
  TitleAndBtnWrapper,
  AddPetBtn,
} from "./PetsData.styled";
import { PetsList } from "./PetsList";

const PetsData = () => {
  return <div>
    <TitleAndBtnWrapper>
      <Title>My pets:</Title>
      <AddPetBtn to="/add-pet">Add Pet <IconPlusSmall/></AddPetBtn>
    </TitleAndBtnWrapper>
    <PetsList/>
  </div>
};

export default PetsData;