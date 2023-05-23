import { Formik } from 'formik';
import * as yup from 'yup';

import {
  FormLabel,
  FormInput,
  Error,
  FormWrapper,
  BtnWrapper,
} from './AddPetForm2.styled';
import {
  AddFormButtonNext,
  AddFormButtonBack,
} from '../../AddPetFormBtn/AddPetFormBtn';
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'The name must be longer than 2 letters')
    .max(16, 'Name must be less than 16 letters'),
  birthday: yup
    .string()
    .required('Date is required')
    .matches(
      /^([0-31]{2})\.(0[1-9]|1[0-2])\.(200[0-9]|201[0-9]|202[0-3])$/,
      'Invalid date format. Use DD.MM.YYYY'
    ),
  breed: yup
    .string()
    .required('Name is required')
    .min(2, 'The Breed must be longer than 2 letters')
    .max(16, 'Breed must be less than 16 letters'),
});

export const PersonalDetailsToAdd = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData(prev => ({ ...prev, [name]: value }));
  };
  return (
    <Formik
      initialValues={{
        name: '',
        birthday: '',
        breed: '',
      }}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <FormWrapper>
          <FormLabel htmlFor="name">
            Name pet
            <FormInput
              placeholder="Type name pet"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              validate={touched.name && !errors.name}
              unvalidate={touched.name && errors.name}
            />
            {errors.name && touched.name ? <Error>{errors.name}</Error> : null}
          </FormLabel>

          <FormLabel htmlFor="birthday">
            Date of birth
            <FormInput
              placeholder="Type date of birth"
              type="text"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              onFocus={e => (e.target.type = 'date')}
              onBlur={e => (e.target.type = 'text')}
              validate={touched.birthday && !errors.birthday}
              unvalidate={touched.birthday && errors.birthday}
            />
            {errors.birthday && touched.birthday ? (
              <Error>{errors.birthday}</Error>
            ) : null}
          </FormLabel>

          <FormLabel htmlFor="breed">
            Breed
            <FormInput
              placeholder="Type breed"
              type="text"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              validate={touched.breed && !errors.breed}
              unvalidate={touched.breed && errors.breed}
            />
            {errors.breed && touched.breed ? (
              <Error>{errors.breed}</Error>
            ) : null}
          </FormLabel>
          <BtnWrapper className="to-add">
            <AddFormButtonNext type="submit" text="Next" onClick={nextStep} />
            <AddFormButtonBack type="button" text="Back" onClick={prevStep} />
          </BtnWrapper>
        </FormWrapper>
      )}
    </Formik>
  );
};
