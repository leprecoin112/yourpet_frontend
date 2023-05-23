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
} from './MoreInfo.styled';
import { useState } from 'react';

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

export const MoreInfo = ({ formData, setFormData, prevStep, onSubmit }) => {
  const [photo, setPhoto] = useState(null);
  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === 'avatar') {
      setPhoto(e.target.files[0]);
    }

    setFormData(prev => ({
      ...prev,
      [name]: name === 'avatar' ? e.target.files[0] : value,
    }));
  };
  const { sex } = formData;
  return (
    <Formik
      initialValues={{
        sex: '',
        avatar: '',
        location: '',
        price: '',
        comments: '',
      }}
      //validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Container className="to-sell">
          <ContainerRadioBtn className="to-sell">
            <Title>The Sex</Title>
            <ContainerFirstBtn className="to-sell">
              <Label className={sex === 'female' ? 'active' : ''}>
                <FemaleIcon />
                <RadioBtn
                  type="radio"
                  name="sex"
                  value="female"
                  id="Female"
                  onChange={handleChange}
                  checked={sex === 'Female'}
                />
                Female
              </Label>
              <Label className={sex === 'male' ? 'active' : ''}>
                <MaleIcon />
                <RadioBtn
                  type="radio"
                  name="sex"
                  value="male"
                  id="Male"
                  onChange={handleChange}
                  checked={sex === 'male'}
                />
                Male
              </Label>
            </ContainerFirstBtn>
            <LabelFile className="to-sell">
              Load image:
              <InputFileContainer>
                <IconsPlusBig />
                {photo && (
                  <img alt="avatar pet" src={URL.createObjectURL(photo)} />
                )}
              </InputFileContainer>
              <InputFile
                type="file"
                name="avatar"
                id="avatar"
                accept="image/*"
                onChange={handleChange}
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
              />
            </FormLabel>
            <FormLabel>
              Price
              <FormInputPet
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
              />
            </FormLabel>
            <FormLabel>
              Comments
              <InputComents
                type="text"
                name="comments"
                placeholder="Comments"
                value={formData.comments}
                onChange={handleChange}
              />
            </FormLabel>
          </ContainerForm>
        </Container>
        <BtnWrapper className="to-sale">
          <AddFormButtonNext type="submit" text="Done" />
          <AddFormButtonBack type="button" text="Back" onClick={prevStep} />
        </BtnWrapper>
      </Form>
    </Formik>
  );
};
