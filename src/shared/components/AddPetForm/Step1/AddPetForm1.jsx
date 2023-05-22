import { Formik, Form, Field } from 'formik';
import {
  RadioBtnWrapper,
  RadioLabel,
  RadioBtn,
  BtnWrapper,
} from './AddPetForm1.styled';
import {AddFormButtonNext, AddFormButtonBack } from '../../AddPetFormBtn/AddPetFormBtn';

export const ChooseOption = ({ nextStep, prevStep }) => {
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
        <RadioLabel htmlFor="for-free">
          <RadioBtn type="radio" name="category" value="for-free" />
          In good hands
        </RadioLabel>
        <BtnWrapper>
          <AddFormButtonBack text="Cancel" onClick={prevStep} />
          <AddFormButtonNext text="Next" onClick={nextStep} />
        </BtnWrapper>
      </RadioBtnWrapper>
    </Formik>
  );
};
