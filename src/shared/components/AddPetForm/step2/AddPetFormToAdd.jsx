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
  date: yup
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

export const PersonalDetailsToAdd = ({ nextStep, prevStep }) => {
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
              validate={touched.email && !errors.email}
              unvalidate={touched.email && errors.email}
            />
            <Error component="div" name="name" />
          </FormLabel>

          <FormLabel htmlFor="birthday">
            Date of birth
            <FormInput
              placeholder="Type date of birth"
              type="text"
              name="birthday"
              onFocus={e => (e.target.type = 'date')}
              onBlur={e => (e.target.type = 'text')}
              validate={touched.email && !errors.email}
              unvalidate={touched.email && errors.email}
            />
            <Error component="div" name="birthday" />
          </FormLabel>

          <FormLabel htmlFor="breed">
            Breed
            <FormInput
              placeholder="Type breed"
              type="text"
              name="breed"
              validate={touched.email && !errors.email}
              unvalidate={touched.email && errors.email}
            />
            <Error component="div" name="breed" />
          </FormLabel>
          <BtnWrapper className="to-add">
            <AddFormButtonNext text="Next" onClick={nextStep} />
            <AddFormButtonBack text="Back" onClick={prevStep} />
          </BtnWrapper>
        </FormWrapper>
      )}
    </Formik>
  );
};
