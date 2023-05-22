import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import {
  RadioBtnWrapper,
  RadioLabel,
  RadioBtn,
  BtnWrapper,
} from './AddPetForm1.styled';
import {
  AddFormButtonNext,
  AddFormButtonBack,
} from '../../AddPetFormBtn/AddPetFormBtn';
const validation = yup.object().shape({
  category: yup
    .string()
    .required('Category is required')
    .oneOf(
      ['my pet', 'sell', 'lost-found', 'for-free'],
      'Category not selected'
    ),
});
export const ChooseOption = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <Formik
      initialValues={{
        category: '',
      }}
      validationSchema={validation}
    >
      {({ values }) => (
        <RadioBtnWrapper>
          <RadioLabel htmlFor="my-pet">
            <RadioBtn
              type="radio"
              name="category"
              value="my-pet"
              id="my-pet"
              // checked={value === 'add_pet'}
            />
            Your pet
          </RadioLabel>
          <RadioLabel htmlFor="sell">
            <RadioBtn
              type="radio"
              name="category"
              value="sell"
              // checked={category === 'sell'}
            />
            Sell
          </RadioLabel>
          <RadioLabel htmlFor="lost-found">
            <RadioBtn
              type="radio"
              name="category"
              value="lost-found"
              // checked={category === 'lost_found'}
            />
            Lost/found
          </RadioLabel>
          <RadioLabel htmlFor="for-free">
            <RadioBtn
              type="radio"
              name="category"
              value="for-free"
              // checked={category === 'sell'}
            />
            In good hands
          </RadioLabel>

          <BtnWrapper>
            <AddFormButtonNext type="button" text="Next" onClick={nextStep} />
            <AddFormButtonBack type="button" text="Cancel" onClick={prevStep} />
          </BtnWrapper>
        </RadioBtnWrapper>
      )}
    </Formik>
  );
};
