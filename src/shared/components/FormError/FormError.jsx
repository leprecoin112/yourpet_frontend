import { ErrorMessage } from 'formik';

const Error = ({ name }) => {
  return (
    <>
      <ErrorMessage name={name} />
    </>
  );
};
export default Error;
