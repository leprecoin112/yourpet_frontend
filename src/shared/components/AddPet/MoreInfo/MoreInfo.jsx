import { Formik, Form } from 'formik';
import * as yup from 'yup';
import {
  Container,
  Title,
  ContainerRadioBtn,
  Label,
  FemaleIcon,
  MaleIcon,
  RadioBtn,
  InputFile,
  InputFileContainer,
  LabelFile,
  FormLabel,
  IconsPlusBig,
  InputComents,
  FormInputPet,
  ContainerForm,
  ContainerFirstBtn,
  BtnWrapper,
  Error,
} from './MoreInfo.styled';

import {
  AddFormButtonNext,
  AddFormButtonBack,
} from '../../AddPetFormBtn/AddPetFormBtn';

const validationSchema = yup.object().shape({
  avatar: yup
    .mixed()
    .required('File is required')
    .test(
      'fileSize',
      'The file should not be more than 3MG',
      value => value && value.size <= 3 * 1024 * 1024
    ),
  sex: yup
    .string()
    .required('Category is required')
    .oneOf(['male', 'female'], 'Sex not selected'),
  location: yup.string().required('Location is required'),
  price: yup
    .number()
    .positive('Price must be greater than 0')
    .required('Price is required'),
  comments: yup
    .string()
    .test(
      'comments',
      'Comments must be between 8 and 120 characters',
      value => {
        if (!value) {
          return true;
        }
        return value.length >= 8 && value.length <= 120;
      }
    ),
});

export const MoreInfo = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
  onSubmit,
}) => {
  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const { sex } = formData;
  return (
    <Formik
      initialValues={{
        sex: '',
        avatar: '',
        location: '',
        price: '',
        coments: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Container className="to-sell">
            <ContainerRadioBtn className="to-sell">
              <Title>The Sex</Title>
              <ContainerFirstBtn className="to-sell">
                <Label>
                  <FemaleIcon />
                  <RadioBtn
                    type="radio"
                    name="sex"
                    value="Female"
                    id="Female"
                    onChange={handleChange}
                    checked={sex === 'Female'}
                  />
                  Female
                </Label>
                <Label>
                  <MaleIcon />
                  <RadioBtn
                    type="radio"
                    name="sex"
                    value="Male"
                    id="Male"
                    onChange={handleChange}
                    checked={sex === 'Male'}
                  />
                  Male
                </Label>
              </ContainerFirstBtn>
              <LabelFile className="to-sell">
                Load image:
                <InputFileContainer>
                  <IconsPlusBig />
                </InputFileContainer>
                <InputFile
                  type="file"
                  name="avatar"
                  id="avatar"
                  accept=".png, .jpeg, .webp, .jpg"
                  onChange={handleChange}
                  value={formData.avatar}
                />
              </LabelFile>
            </ContainerRadioBtn>
            <ContainerForm>
              <FormLabel>
                Location
                <FormInputPet
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  validate={touched.location && !errors.location}
                  unvalidate={touched.location && errors.location}
                />
                {errors.location && touched.location ? (
                  <Error>{errors.location}</Error>
                ) : null}
              </FormLabel>
              <FormLabel>
                Price
                <FormInputPet
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  validate={touched.price && !errors.price}
                  unvalidate={touched.price && errors.price}
                />
                {errors.price && touched.price ? (
                  <Error>{errors.price}</Error>
                ) : null}
              </FormLabel>
              <FormLabel>
                Comments
                <InputComents
                  type="text"
                  name="comments"
                  placeholder="Comments"
                  value={formData.comments}
                  onChange={handleChange}
                  validate={touched.comments && !errors.comments}
                  unvalidate={touched.comments && errors.comments}
                />
                {errors.comments && touched.comments ? (
                  <Error>{errors.comments}</Error>
                ) : null}
              </FormLabel>
            </ContainerForm>
          </Container>
          <BtnWrapper className="to-sale">
            <AddFormButtonNext text="Done" onClick={nextStep} />
            <AddFormButtonBack type="button" text="Back" onClick={prevStep} />
          </BtnWrapper>
        </Form>
      )}
    </Formik>
  );
};
