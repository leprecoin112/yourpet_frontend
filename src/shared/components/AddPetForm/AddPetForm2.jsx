import { Formik, Form, Field } from 'formik';
import {
  AddFormButtonBack,
  AddFormButtonNext,
} from '../AddPetFormBtn/AddPetFormBtn';
import {
  FormLabel,
  FormInput,
  FormWrapper,
  BtnWrapper,
} from './AddPetForm2.styled';

export const PersonalDetails = props => {
  const { formik } = props;
  return (
    <Formik>
      <FormWrapper>
        <FormLabel htmlFor="title">
          Title of add:
          <FormInput placeholder="Type title" type="text" name="title" />
        </FormLabel>

        <FormLabel htmlFor="name">
          Name pet:
          <FormInput placeholder="Type name pet" type="text" name="name" />
        </FormLabel>

        <FormLabel htmlFor="birthday">
          Date of birth:
          <FormInput
            placeholder="Type date of birth"
            type="date"
            name="birthday"
          />
        </FormLabel>

        <FormLabel htmlFor="breed">
          Breed:
          <FormInput placeholder="Type breed" type="text" name="breed" />
        </FormLabel>
        <BtnWrapper>
          <AddFormButtonNext text="Next" />
          <AddFormButtonBack text="Back" />
        </BtnWrapper>
      </FormWrapper>
    </Formik>
  );
};
