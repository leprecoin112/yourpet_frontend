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

const UserDataItem = ({ user }) => {
  const [photo, setPhoto] = useState(null);
  const [activeField, setActiveField] = useState(null);
  const [updateName] = useUpdateNameMutation();
  const [updateEmail] = useUpdateEmailMutation();
  const [updateBirthday] = useUpdateBirthdayMutation();
  const [updateCity] = useUpdateCityMutation();
  const [updatePhone] = useUpdatePhoneMutation();

  const handlePhotoUpload = event => {
    const uploadedPhoto = event.target.files[0];
    setPhoto(URL.createObjectURL(uploadedPhoto));
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
          <PhotoContainer src={user?.avatarUrl} alt="user avtar" />
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
      <Formik>
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
                onChange={formik.handleChange}
                value={formik.values.email}
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
                onChange={formik.handleChange}
                value={formik.values.birthday}
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
                onChange={formik.handleChange}
                value={formik.values.phone}
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
                onChange={formik.handleChange}
                value={formik.values.city}
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
