import { Formik } from 'formik';

// import {
//   AddFormButtonBack,
//   AddFormButtonNext,
// } from '../AddPetFormBtn/AddPetFormBtn';
import {
  FormLabel,
  FormInput,
  Error,
  FormWrapper,
  BtnWrapper,
} from './AddPetForm2.styled';
import {AddFormButtonNext, AddFormButtonBack } from '../../AddPetFormBtn/AddPetFormBtn';

export const PersonalDetails = ({ nextStep, prevStep }) => {
  return (
    <Formik>
      {({ errors, touched }) => (
        <FormWrapper>
          <FormLabel htmlFor="title">
            Title of add
            <FormInput
              placeholder="Type title"
              type="text"
              name="title"
              validate={touched.email && !errors.email}
              unvalidate={touched.email && errors.email}
            />
            <Error component="div" name="title" />
          </FormLabel>

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
          <BtnWrapper>
          <AddFormButtonNext text="Next" onClick={nextStep} />
            <AddFormButtonBack text="Back" onClick={prevStep} />
          </BtnWrapper>
        </FormWrapper>
      )}
    </Formik>
  );
};
