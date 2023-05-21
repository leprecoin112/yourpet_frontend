import { Formik } from 'formik';
import * as yup from 'yup';
import {
  EditPhotoWrapper,
  FormContainer,
  FormInput,
  FormLabel,
  PhotoContainer,
  UserDataWrapper,
  UserPhotoWrapper,
  EditInputBtn,
  Edit,
  Check,
  CustomInput,
} from './UserDataItem.styled';
import PhotoDefault from '../../images/photoDefault/photo-default.png';
import { useEffect, useState } from 'react';
import IconCamera from '../Icons/IconCamera';

const schemaData = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  name: yup.string().required(),
  birthday: yup
    .string()
    .required()
    .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'Дата повинна бути у форматі ДД.ММ.РРРР'),
  city: yup
    .string()
    .required()
    .matches(/^[A-Za-z\s]+$/, 'Місто повинно містити тільки літери'),
  mobilePhone: yup
    .string()
    .required()
    .matches(
      /^\+380\d{9}$/,
      'Мобільний телефон повинен бути у форматі +380XXXXXXXXX'
    ),
});

const UserDataItem = () => {
  const [photo, setPhoto] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const handlePhotoUpload = event => {
    const uploadedPhoto = event.target.files[0];
    setPhoto(URL.createObjectURL(uploadedPhoto));
  };

  const handleEditActive = event => {
    const { id } = event.currentTarget;
    setActiveField(id);
  };

  const handleConfirmFieldData = event => {
    const { id } = event.currentTarget;
    if (id === activeField) {
      setActiveField(null);
    }
    console.log('!!! send field data to backend');
  };

  return (
    <UserDataWrapper>
      <UserPhotoWrapper>
        {photo ? (
          <PhotoContainer src={photo} alt="User photo" />
        ) : (
          <PhotoContainer src={PhotoDefault} alt="Default img" />
        )}
        <EditPhotoWrapper
          type="file"
          id="file"
          accept="image/*"
          onChange={handlePhotoUpload}
        />
        <label htmlFor="file">
          <CustomInput>
            <IconCamera /> Edit photo
          </CustomInput>
        </label>
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
              <FormInput
                type="name"
                name="name"
                placeholder="Your Name"
                disabled={activeField !== 'name'}
              />
              {activeField === 'name' ? (
                <EditInputBtn
                  type="button"
                  onClick={handleConfirmFieldData}
                  id="name"
                >
                  <Check />
                </EditInputBtn>
              ) : (
                <EditInputBtn
                  type="button"
                  onClick={handleEditActive}
                  id="name"
                >
                  <Edit />
                </EditInputBtn>
              )}
            </FormLabel>
            <FormLabel>
              Email:
              <FormInput
                type="email"
                name="email"
                placeholder="Email"
                disabled={activeField !== 'email'}
              />
              {activeField === 'email' ? (
                <EditInputBtn
                  type="button"
                  onClick={handleConfirmFieldData}
                  id="email"
                >
                  <Check />
                </EditInputBtn>
              ) : (
                <EditInputBtn
                  type="button"
                  onClick={handleEditActive}
                  id="email"
                >
                  <Edit />
                </EditInputBtn>
              )}
            </FormLabel>
            <FormLabel>
              Birthday:
              <FormInput
                type="birthday"
                name="birthday"
                placeholder="DD.ММ.YYYY"
                disabled={activeField !== 'birthday'}
              />
              {activeField === 'birthday' ? (
                <EditInputBtn
                  type="button"
                  onClick={handleConfirmFieldData}
                  id="birthday"
                >
                  <Check />
                </EditInputBtn>
              ) : (
                <EditInputBtn
                  type="button"
                  onClick={handleEditActive}
                  id="birthday"
                >
                  <Edit />
                </EditInputBtn>
              )}
            </FormLabel>
            <FormLabel>
              Phone:
              <FormInput
                type="phone"
                name="phone"
                placeholder="Phone"
                disabled={activeField !== 'phone'}
              />
              {activeField === 'phone' ? (
                <EditInputBtn
                  type="button"
                  onClick={handleConfirmFieldData}
                  id="phone"
                >
                  <Check />
                </EditInputBtn>
              ) : (
                <EditInputBtn
                  type="button"
                  onClick={handleEditActive}
                  id="phone"
                >
                  <Edit />
                </EditInputBtn>
              )}
            </FormLabel>
            <FormLabel>
              City:
              <FormInput
                type="city"
                name="city"
                placeholder="City"
                disabled={activeField !== 'city'}
              />
              {activeField === 'city' ? (
                <EditInputBtn
                  type="button"
                  onClick={handleConfirmFieldData}
                  id="city"
                >
                  <Check />
                </EditInputBtn>
              ) : (
                <EditInputBtn
                  type="button"
                  onClick={handleEditActive}
                  id="city"
                >
                  <Edit />
                </EditInputBtn>
              )}
            </FormLabel>
          </FormContainer>
        )}
      </Formik>
    </UserDataWrapper>
  );
};

export default UserDataItem;
