import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isAuth } from '../../../shared/redux/auth/selectors';
import Btn from '../Button/Button';
import { ageCounter } from '../../redux/helpers/ageCounter';
import {
  IconHeart,
  IconTrash,
  IconLocation,
  IconClock,
  IconFemale,
} from '../Icons';

import ModalApproveAction from '../../components/ModalApproveAction';

import {
  ItemContainer,
  ItemPicture,
  ItemImage,
  Info,
  InfoTitle,
  CategoryLabel,
  UserBtns,
  Filter,
  FilterBtn,
  Btns,
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

const noImage = {
  mobileRetina:
    'https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/gaming.png',
  tabletRetina:
    'https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/gaming.png',
  desktopRetina:
    'https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/gaming.png',
};

const categoryTitleHandler = category => {
  return categories.publicCategories.find(([item]) => item === category) ?? '';
};

const NoticeCategoryItem = ({
  _id,
  category,
  title,
  name,
  birthday,
  breed,
  photo,
  sex,
  location,
  price,
  comments,
  owner,
}) => {
  const categoryTitle = categoryTitleHandler(category);
  const [showModal, setShowModal] = useState(false);

  // const age = ageCounter(birthday);
  const age = ageCounter('2022-03-23T00:00:00.000Z');

  // const isOwner = ({ _id, owner }) => {
  //   return userId === owner;
  // };
  const isOwner = true;

  const isLogin = useSelector(isAuth);

  const toastMss = () => {
    return toast.dismiss(), toast.warning('Please login');
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <ItemContainer>
      <CategoryLabel>{category}</CategoryLabel>
      <UserBtns>
        <Btns
          styled="like"
          onClick={!isLogin ? () => toastMss() : () => 'додати в улюблені'}
        >
          <IconHeart />
        </Btns>

        {isOwner && (
          <Btns styled="like" margin="16px 0 0">
            <IconTrash />
          </Btns>
        )}
      </UserBtns>
      <Filter>
        <FilterBtn>
          <IconLocation />
          {location}
        </FilterBtn>
        <FilterBtn>
          <IconClock />
          {age}
        </FilterBtn>
        <FilterBtn>
          <IconFemale />
          {sex}
        </FilterBtn>
      </Filter>
      <ItemPicture>
        <source
          srcSet={`${photo ? photo?.mobile : noImage.mobile} 280w, ${
            photo ? photo?.mobile_retina : noImage.mobileRetina
          } 560w`}
          media="(max-width: 767px)"
          sizes="280px"
        />
        <source
          srcSet={`${photo ? photo?.tablet : noImage.tablet} 336w, ${
            photo ? photo?.tablet_retina : noImage.tabletRetina
          } 672w`}
          media="(min-width: 768px)"
          sizes="336px"
        />
        <source
          srcSet={`${photo ? photo?.desktop : noImage.desktop} 288w, ${
            photo ? photo?.desktop_retina : noImage.desktopRetina
          } 576w`}
          media="(min-width: 1280px)"
          sizes="288px"
        />
        <ItemImage
          src={photo ? photo?.tablet : noImage.tablet}
          loading="lazy"
          alt={title}
          onClick={toggleModal}
        />
      </ItemPicture>
      <Info>
        <InfoTitle>{title}</InfoTitle>
      </Info>
      <Btn
        styled="learnMore"
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      />
      {showModal && (
        <ModalApproveAction toggleModal={() => setShowModal(false)}>
          {<p>Картка улюбленця</p>}
        </ModalApproveAction>
      )}
      <ToastContainer />
    </ItemContainer>
  );
};

export default NoticeCategoryItem;
