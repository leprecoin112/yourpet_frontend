import { useState } from 'react';
import { useAuth } from '../../../shared/hooks/useAuth';
import {
  useAddNoticeToFavoritesMutation,
  useDeleteNoticeByIdMutation,
  useRemoveNoticeFromFavoritesMutation,
} from '../../../shared/redux/api/backend/notices/noticesApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Btn from '../../../shared/components/Button/Button';
import { agePet } from '../../../shared/utils/agePet';
import {
  IconHeart,
  IconTrash,
  IconLocation,
  IconClock,
  IconFemale,
} from '../../../shared/components/Icons';

import { NoticeModal } from '../../../shared/components/NoticeModal/NoticeModal';

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

const noImage = {
  mobileRetina:
    'https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/gaming.png',
  tabletRetina:
    'https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/gaming.png',
  desktopRetina:
    'https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/gaming.png',
};

const NoticeCategoryItem = ({
  id,
  category,
  title,
  image,
  sex,
  location,
  birthday,
  owner,
  favorites,
}) => {
  const categoryTitle = category
    .split('-')
    .join(category.includes('lost') ? '/' : ' ');
  const [showModal, setShowModal] = useState(false);

  const [addNoticeToFavorites] = useAddNoticeToFavoritesMutation();
  const [deleteNoticeById] = useDeleteNoticeByIdMutation();
  const [removeNoticeFromFavorites] = useRemoveNoticeFromFavoritesMutation();

  const { isLoggedIn, user } = useAuth();
  const age = agePet(birthday);
  const isOwner = user?._id === owner;

  console.log('favorites', favorites);
  console.log('id', id);

  const isNoticeInFavorites = favorites?.result.some(el => el._id === id);

  const addToFavorites = async id => {
    await addNoticeToFavorites(id);
  };

  const removeFromFavorites = async id => {
    await removeNoticeFromFavorites(id);
  };

  const deleteNotice = async id => {
    await deleteNoticeById(id);
  };

  const toastMss = () => {
    return toast.warning('Please login');
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onHeartClick = id => {
    if (!isLoggedIn) toastMss();
    isNoticeInFavorites ? removeFromFavorites(id) : addToFavorites(id);
  };

  return (
    <ItemContainer key={id}>
      <CategoryLabel>{categoryTitle}</CategoryLabel>
      <UserBtns>
        <Btns
          className={isNoticeInFavorites ? 'active' : ''}
          onClick={() => onHeartClick(id)}
        >
          <IconHeart />
        </Btns>

        {isOwner && (
          <Btns
            styled="like"
            margin="16px 0 0"
            onClick={() => deleteNotice(id)}
          >
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
          srcSet={`${image ?? noImage.mobile} 280w, ${
            image ?? noImage.mobileRetina
          } 560w`}
          media="(max-width: 767px)"
          sizes="280px"
        />
        <source
          srcSet={`${image ?? noImage.tablet} 336w, ${
            image ?? noImage.tabletRetina
          } 672w`}
          media="(min-width: 768px)"
          sizes="336px"
        />
        <source
          srcSet={`${image ?? noImage.desktop} 288w, ${
            image ?? noImage.desktopRetina
          } 576w`}
          media="(min-width: 1280px)"
          sizes="288px"
        />
        <ItemImage
          src={image ?? noImage.tablet}
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
        <NoticeModal
          noticeId={id}
          onClose={toggleModal}
          favorites={favorites}
        />
      )}
      <ToastContainer />
    </ItemContainer>
  );
};

export default NoticeCategoryItem;
