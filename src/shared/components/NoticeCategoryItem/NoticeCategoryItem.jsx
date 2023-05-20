import { useState } from 'react';
// import { ageHandle, categoryTitleHandler } from 'helpers';
// import FavoriteButton from 'components/FavoriteButton';
// import DeleteButton from 'components/DeleteButton';
import Btn from '../Button/Button';
import { IconHeart, IconTrash } from '../Icons';

import ModalApproveAction from '../../components/ModalApproveAction';

import {
  ItemContainer,
  ItemPicture,
  ItemImage,
  Info,
  InfoTitle,
  InfoDescription,
  InfoDescriptionItem,
  InfoText,
  CategoryLabel,
  UserButtons,
  DeleteBtn,
} from './NoticeCategoryItem.styled';

const categories = {
  publicCategories: [
    ['sell', 'sell'],
    ['lost/found', 'lost/found'],
    ['in good hands', 'in good hands'],
  ],
  privateCategories: [
    ['favorite ads', 'favorite ads'],
    ['my ads', 'my ads'],
  ],
};

const noImage =
  'https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/gaming.png';

const categoryTitleHandler = category => {
  return categories.publicCategories.find(([item]) => item === category) ?? '';
};

const NoticeCategoryItem = ({
  _id,
  imageURL,
  title,
  breed,
  location,
  birthday,
  category,
  favorite,
  owner,
  price,
}) => {
  const categoryTitle = categoryTitleHandler(category);
  const [showModal, setShowModal] = useState(false);
  // const age = ageHandle(birthday);

  // const age = 'one';

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <ItemContainer>
      {/* <CategoryLabel>{categoryTitle}</CategoryLabel> */}
      <CategoryLabel>God</CategoryLabel>
      <UserButtons>
        <Btn styled="like">
          <IconHeart />
        </Btn>
        <DeleteBtn styled="like">
          <IconTrash />
        </DeleteBtn>
        {/* <FavoriteButton noticeId={_id} favorite={favorite} />
        <DeleteButton translucent noticeId={_id} owner={owner} /> */}
      </UserButtons>
      <ItemPicture>
        <source
          srcSet="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/gaming.png"
          media="(max-width: 767px)"
          sizes="280px"
        />
        {/* <source
          srcSet={`${imageURL ? imageURL?.mobile : noImage.mobile} 280w, ${
            imageURL ? imageURL?.mobile_retina : noImage.mobileRetina
          } 560w`}
          media="(max-width: 767px)"
          sizes="280px"
        />
        <source
          srcSet={`${imageURL ? imageURL?.desktop : noImage.desktop} 288w, ${
            imageURL
              ? imageURL?.desktop_retina
              : noImage.desktopRetina.replace('%40', '@')
          } 576w`}
          media="(min-width: 1280px)"
          sizes="288px"
        />
        <source
          srcSet={`${imageURL ? imageURL?.tablet : noImage.tablet} 336w, ${
            imageURL
              ? imageURL?.tablet_retina
              : noImage.tabletRetina.replace('%40', '@')
          } 672w`}
          media="(min-width: 768px)"
          sizes="336px"
        /> */}
        <ItemImage
          src={imageURL ? imageURL?.tablet : noImage.tablet}
          loading="lazy"
          alt={title}
          onClick={toggleModal}
        />
        {showModal && (
          <ModalApproveAction onClose={toggleModal} image={imageURL} />
        )}
      </ItemPicture>
      <Info>
        <InfoTitle>InfoTitle</InfoTitle>
        <InfoDescription>
          {/* {age && (
            <InfoDescriptionItem>
              <InfoText>Age:</InfoText>
              <InfoText>{age}</InfoText>
            </InfoDescriptionItem>
          )} */}
          {categoryTitle === 'sell' && price && (
            <InfoDescriptionItem>
              <InfoText>Price:</InfoText>
              <InfoText>{`${price}$`}</InfoText>
            </InfoDescriptionItem>
          )}
        </InfoDescription>
      </Info>
      <Btn styled="learnMore" />
      {/* <LearnMoreButton noticeId={_id} favorite={favorite} owner={owner} /> */}
    </ItemContainer>
  );
};

export default NoticeCategoryItem;
