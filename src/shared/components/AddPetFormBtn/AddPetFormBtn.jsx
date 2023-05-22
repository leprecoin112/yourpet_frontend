import { ButtonBack, ButtonNext } from './AddPetFormBtn.styled';
import IconArrowLeft from '../Icons/IconArrowLeft';
import IconPaw from '../Icons/IconPaw';

export const AddFormButtonBack = ({ text, type, onClick}) => {
  return (
    <ButtonBack type={type} onClick={onClick}>
      <IconArrowLeft />
      {text}
    </ButtonBack>
  );
};
export const AddFormButtonNext = ({ text, type, onClick }) => {
  return (
    <ButtonNext type={type} onClick={onClick}>
      {text}
      <IconPaw />
    </ButtonNext>
  );
};