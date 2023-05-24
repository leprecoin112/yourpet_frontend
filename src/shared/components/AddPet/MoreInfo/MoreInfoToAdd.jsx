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
  Image,
} from './MoreInfo.styled';
import {
  AddFormButtonNext,
  AddFormButtonBack,
} from '../../AddPetFormBtn/AddPetFormBtn';
import { useState } from 'react';

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
                {photo && (
                  <Image alt="avatar pet" src={URL.createObjectURL(photo)} />
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
          <AddFormButtonNext type="submit" text="Done" />
          <AddFormButtonBack type="button" text="Back" onClick={prevStep} />
        </BtnWrapper>
      </Form>
    </Formik>
  );
};

export default MoreInfoToAdd;
