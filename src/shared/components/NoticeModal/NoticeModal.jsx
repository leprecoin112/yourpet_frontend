import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../hooks/useAuth';
import { useFindNoticeByIdQuery } from '../../redux/api/backend/notices/noticesApi';
import { IconHeart } from '../Icons';

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

export const NoticeModal = ({ onClose, noticeId }) => {
  const { data } = useFindNoticeByIdQuery(noticeId);
  const { isLoggedIn, user } = useAuth;
  const categoryTitle = data?.data.category
    .split('-')
    .join(data.data.category.includes('lost') ? '/' : ' ');
  const image = `https://yourpet-backend-jxa0.onrender.com/${data?.data.photo}`;

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

  const toastMss = () => {
    return toast.warning('Please login');
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
                <ModalImage src={image} alt={data.data.name} />
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
                      <RawData>{formatDate(data?.data.birthday)}</RawData>
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
              <ContactButton href={`tel:${data.data.owner?.phone}`}>
                Contact
              </ContactButton>
              <AddToFavoriteButton
                onClick={
                  !isLoggedIn ? () => toastMss() : () => 'додати в улюблені'
                }
              >
                Add to <IconHeart />
              </AddToFavoriteButton>
            </ButtonWrapper>
          </>
        )}
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};
