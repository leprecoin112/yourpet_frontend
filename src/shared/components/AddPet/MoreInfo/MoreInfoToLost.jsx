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
  Image,
} from './MoreInfo.styled';
import {
  AddFormButtonNext,
  AddFormButtonBack,
} from '../../AddPetFormBtn/AddPetFormBtn';
import { useState } from 'react';

const validationSchema = yup.object().shape({
  location: yup.string().required('Name is required'),

  comments: yup.string(),
});

const MoreInfoToLost = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
  onSubmit,
}) => {
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
        theSex: '',
        Male: '',
        location: '',
        comments: '',
      }}
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
                  checked={sex === 'female'}
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
              <InputFileContainer className="to-lost">
                <IconsPlusBig />
                {photo && (
                  <Image alt="avatar pet" src={URL.createObjectURL(photo)} />
                )}
              </InputFileContainer>
              <InputFile
                type="file"
                name="avatar"
                id="pet-avatar"
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
              Comments
              <InputComents
                className="to-lost"
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

export default MoreInfoToLost;
