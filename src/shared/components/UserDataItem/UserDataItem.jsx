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
  CustomFileUploud,
  Error,

} from './UserDataItem.styled';
import { useState } from 'react';
import IconCamera from '../Icons/IconCamera';
import { useFormik } from 'formik';
import {
  useUpdateAvatarsMutation,
  useUpdateBirthdayMutation,
  useUpdateCityMutation,
  useUpdateNameMutation,
  useUpdatePhoneMutation,
  useUpdateEmailMutation,
} from '../../redux/api/backend/user/userApi';
import { IconCheck } from '../Icons';

const schemaData = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  name: yup.string().min(3).required('Name is required'),
  birthday: yup
    .string()
    .required()
    .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'Дата повинна бути у форматі ДД.ММ.РРРР'),
  city: yup
    .string()
    .required()
    .matches(/^[A-Za-z\s]+$/, 'Місто повинно містити тільки літери'),
  phone: yup
    .string()
    .required()
    .matches(
      /^\+380\d{9}$/,
      'Мобільний телефон повинен бути у форматі +380XXXXXXXXX'
    ),
});

const UserDataItem = ({ user }) => {
  const [photo, setPhoto] = useState(null);
  const [activeField, setActiveField] = useState(null);
  const [updateName] = useUpdateNameMutation();
  const [updateEmail] = useUpdateEmailMutation();
  const [updateBirthday] = useUpdateBirthdayMutation();
  const [updateCity] = useUpdateCityMutation();
  const [updatePhone] = useUpdatePhoneMutation();
  const [updateAvatars] = useUpdateAvatarsMutation();

  const handlePhotoUpload = async event => {
    const uploadedPhoto = event.target.files[0];
    setPhoto(URL.createObjectURL(uploadedPhoto));
    await updateAvatars(uploadedPhoto);
  };

  const handleConfirmPhoto = () => {
    setPhoto(null);
  };

  const handleEditActive = event => {
    const { id } = event.currentTarget;
    setActiveField(id);
  };

  const formik = useFormik({
    initialValues: {
      email: user?.email,
      name: user?.name,
      birthday: user?.birthday,
      city: user?.city,
      phone: user?.phone,
    },
    enableReinitialize: true,
    validationSchema: schemaData,
  });

  const handleConfirmFieldData = async event => {
    const { id } = event.currentTarget;
    const { name, email, birthday, city, phone } = formik.values;
    if (id === activeField) {
      setActiveField(null);
    }
    switch (id) {
      case 'name':
        await updateName({ name });
        break;
      case 'email':
        await updateEmail({ email });
        break;
      case 'birthday':
        await updateBirthday({ birthday });
        break;
      case 'city':
        await updateCity({ city });
        break;
      case 'phone':
        await updatePhone({ phone });
        break;
      default:
        return;
    }
  };

  return (
    <UserDataWrapper>
      <UserPhotoWrapper>
        {photo ? (
          <PhotoContainer src={photo} alt="User photo" />
        ) : (
          <PhotoContainer
            src={`https://yourpet-backend-jxa0.onrender.com/${user?.avatarURL}`}
            alt="user avatar"
          />
        )}
        <EditPhotoWrapper
          type="file"
          id="file"
          accept="image/*"
          onChange={handlePhotoUpload}
        />
        {photo ? (<CustomFileUploud onClick={handleConfirmPhoto}><IconCheck/>Confirm</CustomFileUploud>) : (
          <label htmlFor="file">
          <CustomInput>
            <IconCamera/> Edit photo
          </CustomInput>
        </label>
        )}
      </UserPhotoWrapper>
      <Formik {...formik}>
        {() => (
          <FormContainer>
            <FormLabel>
              Name:
              <FormInput
                type="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Your Name"
                disabled={activeField !== 'name'}
              />
              {activeField === 'name' ? (
                <EditInputBtn
                  type="button"
                  disabled={formik.errors.name}
                  onClick={handleConfirmFieldData}
                  id="name"
                >
                  {formik.errors.name ? <Error /> : <Check />}
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
              {formik.errors.name && formik.touched.name && (
    <div>{formik.errors.name}</div>
  )}
            </FormLabel>
            <FormLabel>
              Email:
              <FormInput
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Email"
                disabled={activeField !== 'email'}
              />
              {activeField === 'email' ? (
                <EditInputBtn
                  type="button"
                  disabled={formik.errors.email}
                  onClick={handleConfirmFieldData}
                  id="email"
                >
                  {formik.errors.email ? <Error /> : <Check />}
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
                onChange={formik.handleChange}
                value={formik.values.birthday}
                placeholder="DD.ММ.YYYY"
                disabled={activeField !== 'birthday'}
              />
              {activeField === 'birthday' ? (
                <EditInputBtn
                  type="button"
                  disabled={formik.errors.birthday}
                  onClick={handleConfirmFieldData}
                  id="birthday"
                >
                  {formik.errors.birthday ? <Error /> : <Check />}
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
                onChange={formik.handleChange}
                value={formik.values.phone}
                disabled={activeField !== 'phone'}
              />
              {activeField === 'phone' ? (
                <EditInputBtn
                  type="button"
                  disabled={formik.errors.phone}
                  onClick={handleConfirmFieldData}
                  id="phone"
                >
                  {formik.errors.phone ? <Error /> : <Check />}
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
                onChange={formik.handleChange}
                value={formik.values.city}
                placeholder="City"
                disabled={activeField !== 'city'}
              />
              {activeField === 'city' ? (
                <EditInputBtn
                  type="button"
                  disabled={formik.errors.city}
                  onClick={handleConfirmFieldData}
                  id="city"
                >
                  {formik.errors.city ? <Error /> : <Check />}
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
