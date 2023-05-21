import { Formik, Form, Field } from 'formik';
import {
  RadioBtnWrapper,
  RadioBtn,
  RadioLabel,
  BtnWrapper,
} from './AddPetForm1.styled';
import {
  AddFormButtonBack,
  AddFormButtonNext,
} from '../AddPetFormBtn/AddPetFormBtn';
export const ChooseOption = () => {
  return (
    <Formik
      initialValues={{
        category: '',
      }}
    >
      <RadioBtnWrapper>
        <RadioLabel htmlFor="my-pet">
          <RadioBtn type="radio" name="category" value="my-pet" />
          Your pet
        </RadioLabel>
        <RadioLabel htmlFor="sell">
          <RadioBtn type="radio" name="category" value="sell" />
          Sell
        </RadioLabel>
        <RadioLabel htmlFor="lost-found">
          <RadioBtn type="radio" name="category" value="lost-found" />
          Lost/found
        </RadioLabel>
        <lRadioLabel htmlFor="for-free">
          <RadioBtn type="radio" name="category" value="for-free" />
          In good hands
        </lRadioLabel>
        <BtnWrapper>
          <AddFormButtonNext text="Next" />
          <AddFormButtonBack text="Cancel" />
        </BtnWrapper>
      </RadioBtnWrapper>
    </Formik>
  );
};
