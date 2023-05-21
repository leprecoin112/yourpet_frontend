import { Formik, Form, Field } from 'formik';
import { RadioBtnWrapper, RadioLabel, BtnWrapper } from './AddPetForm1.styled';
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
          <Field type="radio" name="category" value="my-pet" />
          Your pet
        </RadioLabel>
        <RadioLabel htmlFor="sell">
          <Field type="radio" name="category" value="sell" />
          Sell
        </RadioLabel>
        <RadioLabel htmlFor="lost-found">
          <Field type="radio" name="category" value="lost-found" />
          Lost/found
        </RadioLabel>
        <RadioLabel htmlFor="for-free">
          <Field type="radio" name="category" value="for-free" />
          In good hands
        </RadioLabel>
        <BtnWrapper>
          <AddFormButtonNext text="Next" />
          <AddFormButtonBack text="Cancel" />
        </BtnWrapper>
      </RadioBtnWrapper>
    </Formik>
  );
};
