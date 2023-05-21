import { IconHeart } from '../Icons';

import { ButtonWrapper, IconWrapper, AddButton } from './AddToFavorite.styled';

export const AddToFavorite = () => {
  return (
    <ButtonWrapper>
      <AddButton>
        Add to
        <IconWrapper>
        <IconHeart />
        </IconWrapper>
      </AddButton>
      
    </ButtonWrapper>
  );
};
