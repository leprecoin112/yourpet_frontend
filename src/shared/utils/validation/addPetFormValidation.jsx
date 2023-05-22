import * as yup from 'yup';
export const addPetFormValidation = yup.object().shape({
  category: yup
    .string()
    .required('Category is required')
    .oneOf(
      ['my pet', 'sell', 'lost-found', 'for-free'],
      'Category not selected'
    ),
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'The name must be longer than 2 letters')
    .max(16, 'Name must be less than 16 letters'),
  date: yup
    .string()
    .required('Date is required')
    .matches(
      /^([0-31]{2})\.(0[1-9]|1[0-2])\.(200[0-9]|201[0-9]|202[0-3])$/,
      'Invalid date format. Use DD.MM.YYYY'
    ),
  breed: yup
    .string()
    .required('Name is required')
    .min(2, 'The Breed must be longer than 2 letters')
    .max(16, 'Breed must be less than 16 letters'),
  photo: yup
    .mixed()
    .required('File is required')
    .test(
      'fileSize',
      'The file should not be more than 3MG',
      value => value && value.size <= 3 * 1024 * 1024
    ),
  sex: yup
    .string()
    .required('Category is required')
    .oneOf(['male', 'female'], 'Sex not selected'),
  location: yup
    .string()
    .matches(/^[A-Za-z-]+$/, 'Invalid location format. Use DD.MM.YYYY'),
  price: yup
    .number()
    .positive('Price must be greater than 0')
    .required('Price is required'),
  comments: yup
    .string()
    .test(
      'comments',
      'Comments must be between 8 and 120 characters',
      value => {
        if (!value) {
          return true;
        }
        return value.length >= 8 && value.length <= 120;
      }
    ),
});
