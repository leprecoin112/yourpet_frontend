import { ButtonBack, ButtonNext } from './AddPetFormBtn.styled';
import IconArrowLeft from '../Icons/IconArrowLeft';
import IconPaw from '../Icons/IconPaw';

export const AddFormButtonBack = ({ text, type }) => {
  return (
    <ButtonBack type={type}>
      <IconArrowLeft />
      {text}
    </ButtonBack>
  );
};
export const AddFormButtonNext = ({ text, type }) => {
  return (
    <ButtonNext type={type}>
      {text}
      <IconPaw />
    </ButtonNext>
  );
};
