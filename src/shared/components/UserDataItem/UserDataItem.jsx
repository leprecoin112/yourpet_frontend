import { Formik } from 'formik';
import * as yup from 'yup';
import { EditPhotoWrapper, FormContainer, FormInput, FormLabel, PhotoContainer, UserDataWrapper, UserPhotoWrapper } from './UserDataItem.styled';
import PhotoDefault from '../../images/photoDefault/photo-default.png';
import { useState } from 'react';
// import IconCamera from '../Icons/IconCamera';

const schemaData = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  name: yup.string().required(),
  birthday: yup.string().required()
    .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'Дата повинна бути у форматі ДД.ММ.РРРР'),
  city: yup.string().required()
    .matches(/^[A-Za-z\s]+$/, 'Місто повинно містити тільки літери'),
  mobilePhone: yup.string().required()
    .matches(/^\+380\d{9}$/, 'Мобільний телефон повинен бути у форматі +380XXXXXXXXX')
});


const UserDataItem = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoUpload = (event) => {
    const uploadedPhoto = event.target.files[0];
    setPhoto(URL.createObjectURL(uploadedPhoto));
  };

  return <UserDataWrapper>
    <UserPhotoWrapper>
      {photo ? (
        <PhotoContainer src={photo} alt="User photo" />
      ) : (
        <PhotoContainer src={PhotoDefault} alt="Default img" />
      )}
      <EditPhotoWrapper type="file" accept="image/*" onChange={handlePhotoUpload}/>
    </UserPhotoWrapper>
    <Formik
      initialValues={{
        email: '',
        name: '',
        birthday: '',
        city: '',
        mobilePhone: '',
      }}
      validationSchema={schemaData}
    >
      {() => (
        <FormContainer>
          <FormLabel>
            Name:
            <FormInput type="name" name="name" placeholder="Your Name" />
          </FormLabel>
          <FormLabel>
            Email:
            <FormInput type="email" name="email" placeholder="Email" />
          </FormLabel>
          <FormLabel>
            Birthday:
            <FormInput type="birthday" name="birthday" placeholder="DD.ММ.YYYY" />
          </FormLabel>
          <FormLabel>
            Phone:
            <FormInput type="phone" name="phone" placeholder="Phone" />
          </FormLabel>
          <FormLabel>
            City:
            <FormInput type="city" name="city" placeholder="City" />
          </FormLabel>
        </FormContainer>
      )}
    </Formik>
  </UserDataWrapper>

};

export default UserDataItem;