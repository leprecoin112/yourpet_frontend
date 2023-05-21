import {
  Overlay,
  ModalContainer,
  IconClose,
  List,
  ListItem,
  TextWrapper,
  Text,
  TextEmail,
  TextPhone,
  ModalTitle,
  ModalImage,
  ModalComments,
  ButtonWrapper,
} from './NoticeModal.styled';

import IconCrossBig from '../Icons/IconCrossBig';
import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import { fetchNoticeById } from '../../redux/notices/operations';
import { Contact } from '../Contact/Contact';
import { AddToFavorite } from '../AddToFavorite/AddToFavorite';

const modalRoot = document.querySelector('#modal-root');

export const NoticeModal = ({ onClose, noticeId }) => {
  const [noticeInfo, setNoticeInfo] = useState([{}]);

  useEffect(() => {
    (async function getNoticeById() {
      const res = await fetchNoticeById(noticeId);
      setNoticeInfo(res.result);
    })();
  }, [noticeId]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
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
        {noticeInfo ? (
          <List>
            {noticeInfo.map(
              (
                {
                  photo,
                  title,
                  name,
                  birthday,
                  breed,
                  location,
                  sex,
                  comments,
                  owner,
                },
                idx
              ) => (
                <ListItem key={idx}>
                  <ModalImage src={photo} alt=""></ModalImage>
                  <ModalTitle>{title}</ModalTitle>
                  <TextWrapper>
                    <Text>Name:{name}</Text>
                    <Text>Birthday:{birthday}</Text>
                    <Text>Breed:{breed}</Text>
                    <Text>Place:{location}</Text>
                    <Text>The sex:{sex}</Text>
                    <TextEmail>Email:{owner}</TextEmail>
                    <TextPhone>Phone:{owner}</TextPhone>
                  </TextWrapper>
                  <ModalComments>Comments:{comments}</ModalComments>
                </ListItem>
              )
            )}
          </List>
        ) : null}
        <ButtonWrapper>
          <Contact />
          <AddToFavorite />
        </ButtonWrapper>
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};
