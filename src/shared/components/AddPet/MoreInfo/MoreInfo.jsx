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
} from './MoreInfo.styled';

import { Formik, Form } from 'formik';
const MoreInfo = () => {
  return (
    <Formik>
      <Form>
        <Container>
          <ContainerRadioBtn>
          <Title>The Sex</Title>

            <ContainerFirstBtn>

              <Label>
                <FemaleIcon />
                <RadioBtn type="radio" name="sex" value="Female" />
                Female
              </Label>
              <Label>
                <MaleIcon />
                <RadioBtn type="radio" name="sex" value="Male" />
                Male
              </Label>
            </ContainerFirstBtn>
            <LabelFile>
              Add photo
              <InputFileContainer>
                <IconsPlusBig />
              </InputFileContainer>
              <InputFile
                type="file"
                name="avatar"
                id="pet-avatar"
                accept=".png, .jpeg, .webp, .jpg"
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
              />
            </FormLabel>
            <FormLabel>
              Price
              <FormInputPet type="number" name="price" placeholder="Price" />
            </FormLabel>
            <FormLabel>
              Comments
              <InputComents
                type="text"
                name="comments"
                placeholder="Comments"
              />
            </FormLabel>
          </ContainerForm>
        </Container>
      </Form>
    </Formik>
  );
};

export default MoreInfo;
