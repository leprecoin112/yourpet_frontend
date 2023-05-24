import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useFindNoticeByIdQuery } from '../../redux/api/backend/notices/noticesApi';
import { IconHeart } from '../Icons';
import PropTypes from 'prop-types';

import {
  Overlay,
  ModalContainer,
  IconClose,
  ModalTitle,
  ModalImage,
  CommentsTitle,
  ButtonWrapper,
  RawTitle,
  RawData,
  Table,
  ContactLink,
  CommentsWrapper,
  ContactButton,
  AddToFavoriteButton,
  ImageWrapper,
  CategoryLabel,
  DataContainer,
} from './NoticeModal.styled';

import IconCrossBig from '../Icons/IconCrossBig';
import { formatDate } from '../../utils/dateUtils';

const modalRoot = document.querySelector('#modal-root');

export const NoticeModal = ({ onClose, noticeId, favorites, onHeart }) => {
  const { data } = useFindNoticeByIdQuery(noticeId);
  const isNoticeInFavorites = favorites?.result.some(el => el._id === noticeId);
  const categoryTitle = data?.data.category
    .split('-')
    .join(data.data.category.includes('lost') ? '/' : ' ');

  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <IconClose onClick={onClose}>
          <IconCrossBig color={'#54ADFF'} />
        </IconClose>
        {data && (
          <>
            <DataContainer>
              <ImageWrapper>
                <ModalImage src={data?.data.photo} alt={data.data.name} />
                <CategoryLabel>{categoryTitle}</CategoryLabel>
              </ImageWrapper>
              <div>
                <ModalTitle>{data.data.title}</ModalTitle>
                <Table>
                  <tbody>
                    <tr>
                      <RawTitle>Name:</RawTitle>
                      <RawData>{data.data.name}</RawData>
                    </tr>
                    <tr>
                      <RawTitle>Birthday:</RawTitle>
                      <RawData>{formatDate(data.data.birthday)}</RawData>
                    </tr>
                    <tr>
                      <RawTitle>Breed:</RawTitle>
                      <RawData>{data.data.breed}</RawData>
                    </tr>
                    <tr>
                      <RawTitle>Place:</RawTitle>
                      <RawData>{data.data.location}</RawData>
                    </tr>
                    <tr>
                      <RawTitle>The sex:</RawTitle>
                      <RawData>{data.data.sex}</RawData>
                    </tr>
                    <tr>
                      <RawTitle>Email:</RawTitle>
                      <RawData>
                        <ContactLink href={`mailto:${data.data.owner?.email}`}>
                          {data.data.owner?.email}
                        </ContactLink>
                      </RawData>
                    </tr>
                    <tr>
                      <RawTitle>Phone:</RawTitle>
                      <RawData>
                        <ContactLink href={`tel:${data.data.owner?.phone}`}>
                          {data.data.owner?.phone}
                        </ContactLink>
                      </RawData>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </DataContainer>
            <CommentsWrapper>
              <CommentsTitle>Comments:&nbsp;</CommentsTitle>
              {data.data.comments}
            </CommentsWrapper>
            <ButtonWrapper>
              {data.data.owner?.phone && (
                <ContactButton href={`tel:${data.data.owner?.phone}`}>
                  Contact
                </ContactButton>
              )}
              <AddToFavoriteButton onClick={() => onHeart(noticeId)}>
                {isNoticeInFavorites ? 'Remove' : 'Add to'} <IconHeart />
              </AddToFavoriteButton>
            </ButtonWrapper>
          </>
        )}
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};

NoticeModal.propTypes = {
  onClose: PropTypes.func,
  onHeart: PropTypes.func,
  noticeId: PropTypes.string,
  favorites: PropTypes.arrayOf(PropTypes.object),
};
