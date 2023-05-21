import { Field } from 'formik';

export const ChooseOption = () => {
  return (
    <div>
      <label htmlFor="my-pet">
        <Field type="radio" name="category" value="my-pet" />
        Your pet
      </label>
      <label htmlFor="sell">
        <Field type="radio" name="category" value="sell" />
        Sell
      </label>
      <label htmlFor="lost-found">
        <Field type="radio" name="category" value="lost-found" />
        Lost/found
      </label>
      <label htmlFor="for-free">
        <Field type="radio" name="category" value="for-free" />
        In good hands
      </label>
      <div>
        <button type="button" text="Next" />
        <button text="Cancel" />
      </div>
    </div>
  );
};
