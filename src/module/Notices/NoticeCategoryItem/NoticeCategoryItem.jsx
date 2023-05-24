import { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../../../shared/hooks/useAuth';
import {
  useAddNoticeToFavoritesMutation,
  useDeleteNoticeByIdMutation,
  useRemoveNoticeFromFavoritesMutation,
} from '../../../shared/redux/api/backend/notices/noticesApi';
import { useGetUserQuery } from '../../../shared/redux/api/backend/user/userApi';
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
  const { data } = useGetUserQuery();
  console.log(data)

  const { isLoggedIn, user } = useAuth();
  const age = agePet(birthday, 'parse');
  const isOwner = data?._id === owner;

  const isNoticeInFavorites = favorites?.result.some(el => el._id === id);

  const addToFavorites = async id => {
    await addNoticeToFavorites(id);
    toast.info('Added to favorite');
  };

  const removeFromFavorites = async id => {
    await removeNoticeFromFavorites(id);
    toast.info('Removed from favorite');
  };

  const deleteNotice = async (id, title) => {
    await deleteNoticeById(id);
    toast.info(`Notice '${title}' deleted`);
  };


  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onHeartClick = id => {
    if (!isLoggedIn) return toast.warning('Please login');
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
            onClick={() => deleteNotice(id, title)}
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
          onHeart={onHeartClick}
        />
      )}
      <ToastContainer />
    </ItemContainer>
  );
};

NoticeCategoryItem.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  sex: PropTypes.string,
  location: PropTypes.string,
  birthday: PropTypes.string,
  owner: PropTypes.string,
  favorites: PropTypes.arrayOf(PropTypes.object),
};

export default NoticeCategoryItem;
