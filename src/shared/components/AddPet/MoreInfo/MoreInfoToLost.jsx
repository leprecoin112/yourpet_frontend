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
import {
  AddFormButtonNext,
  AddFormButtonBack,
} from '../../AddPetFormBtn/AddPetFormBtn';

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
  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const { theSex } = formData;
  return (
    <Formik
      initialValues={{
        theSex: '',
        Male: '',
        location: '',
        comments: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
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
                  checked={theSex === 'Female'}
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
                  checked={theSex === 'Male'}
                />
                Male
              </Label>
            </ContainerFirstBtn>
            <LabelFile className="to-sell">
              Load image:
              <InputFileContainer className="to-lost">
                <IconsPlusBig />
              </InputFileContainer>
              <InputFile
                type="file"
                name="avatar"
                id="pet-avatar"
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
          <AddFormButtonNext text="Done" onClick={nextStep} />
          <AddFormButtonBack text="Back" onClick={prevStep} />
        </BtnWrapper>
      </Form>
    </Formik>
  );
};

export default MoreInfoToLost;
