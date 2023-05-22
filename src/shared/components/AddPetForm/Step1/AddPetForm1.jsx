import { Formik, ErrorMessage } from 'formik';
import {
  RadioBtnWrapper,
  RadioLabel,
  RadioBtn,
  BtnWrapper,
} from './AddPetForm1.styled';
import * as yup from 'yup';
import {
  AddFormButtonNext,
  AddFormButtonBack,
} from '../../AddPetFormBtn/AddPetFormBtn';

const validationSchema = yup.object().shape({
  category: yup.string().required('Category is required'),
});

export const ChooseOption = ({ nextStep, prevStep, formData }) => {
  const handleSubmit = newData => nextStep(newData);
  return ({ values }) => {
    <Formik
      initialValues={{ category: '' }}
      validationSchema={validationSchema}
      onSubmit={category => {
        console.log(category);
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
        <ErrorMessage name="category" />
        <BtnWrapper>
          <AddFormButtonNext type="submit" text="Next" onClick={nextStep} />
          <AddFormButtonBack type="button" text="Cancel" onClick={prevStep} />
        </BtnWrapper>
      </RadioBtnWrapper>
    </Formik>;
  };
};
