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
import {
  AddFormButtonNext,
  AddFormButtonBack,
} from '../../AddPetFormBtn/AddPetFormBtn';

import { Formik, Form } from 'formik';
const MoreInfo = ({ nextStep, prevStep }) => {
  return (
    <Formik>
      <Form>
        <Container className="to-sell">
          <ContainerRadioBtn className="to-sell">
            <Title>The Sex</Title>
            <ContainerFirstBtn className="to-sell">
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
            <LabelFile className="to-sell">
              Load image:
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
        <BtnWrapper className="to-sale">
          <AddFormButtonNext text="Done" onClick={nextStep} />
          <AddFormButtonBack text="Back" onClick={prevStep} />
        </BtnWrapper>
      </Form>
    </Formik>
  );
};

export default MoreInfo;
