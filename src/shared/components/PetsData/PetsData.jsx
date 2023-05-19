
import IconPlusSmall from "../Icons/IconPlusSmall";
import {
  Title,
  PetsDataWrapper,
  TitleAndBtnWrapper,
  AddPetBtn,

} from "./PetsData.styled";

const PetsData = () => {
  return <div>
    <TitleAndBtnWrapper>
      <Title>My pets:</Title>
      <AddPetBtn to="/add-pet">Add Pet <IconPlusSmall/></AddPetBtn>
    </TitleAndBtnWrapper>
    <PetsDataWrapper>
        <p></p>
    </PetsDataWrapper>
  </div>
};

export default PetsData;