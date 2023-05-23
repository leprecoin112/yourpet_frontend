import { Formik, Form } from 'formik';
import * as yup from 'yup';
import {
  Container,
  ContainerRadioBtn,
  InputFile,
  InputFileContainer,
  LabelFile,
  FormLabel,
  IconsPlusBig,
  InputComents,
  ContainerForm,
  BtnWrapper,
} from './MoreInfo.styled';
import {
  AddFormButtonNext,
  AddFormButtonBack,
} from '../../AddPetFormBtn/AddPetFormBtn';

const validationSchema = yup.object().shape({
  comments: yup.string(),
});

const MoreInfoToAdd = ({
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
  return (
    <Formik
      initialValues={{
        comments: '',
        avatar: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Container className="to-add">
          <ContainerRadioBtn>
            <LabelFile className="to-add">
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
            <FormLabel className="to-add">
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
        <BtnWrapper className="to-add">
          <AddFormButtonNext text="Done" onClick={nextStep} />
          <AddFormButtonBack text="Back" onClick={prevStep} />
        </BtnWrapper>
      </Form>
    </Formik>
  );
};

export default MoreInfoToAdd;
