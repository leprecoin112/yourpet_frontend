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
  category: yup.string().required('Category is required'),
});

export const ChooseOption = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = e => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, category: value }));
  };
  const { category } = formData;
  return (
    <Formik
      initialValues={{
        category: '',
      }}
      validationSchema={validation}
    >
      {({ errors, touched }) => (
        <RadioBtnWrapper>
          <RadioLabel
            htmlFor="my-pet"
            className={category === 'my-pet' ? 'active' : ''}
          >
            <RadioBtn
              type="radio"
              name="category"
              value="my-pet"
              id="my-pet"
              onChange={handleChange}
              checked={category === 'my-pet'}
            />
            Your pet
          </RadioLabel>
          <RadioLabel
            htmlFor="sell"
            className={category === 'sell' ? 'active' : ''}
          >
            <RadioBtn
              type="radio"
              name="category"
              value="sell"
              id="sell"
              onChange={handleChange}
              checked={category === 'sell'}
            />
            Sell
          </RadioLabel>
          <RadioLabel
            htmlFor="lost-found"
            className={category === 'lost-found' ? 'active' : ''}
          >
            <RadioBtn
              type="radio"
              name="category"
              value="lost-found"
              id="lost-found"
              onChange={handleChange}
              checked={category === 'lost-found'}
            />
            Lost/found
          </RadioLabel>
          <RadioLabel
            htmlFor="for-free"
            className={category === 'for-free' ? 'active' : ''}
          >
            <RadioBtn
              type="radio"
              name="category"
              value="for-free"
              id="for-free"
              onChange={handleChange}
              checked={category === 'for-free'}
            />
            In good hands
          </RadioLabel>
          {errors.category && touched.category ? (
            <div>{errors.category}</div>
          ) : null}
          <BtnWrapper>
            {formData.category ? (
              <AddFormButtonNext type="submit" text="Next" onClick={nextStep} />
            ) : (
              <AddFormButtonNext
                type="submit"
                text="Next"
                onClick={nextStep}
                disabled
              />
            )}
            <AddFormButtonBack type="button" text="Cancel" onClick={prevStep} />
          </BtnWrapper>
        </RadioBtnWrapper>
      )}
    </Formik>
  );
};
