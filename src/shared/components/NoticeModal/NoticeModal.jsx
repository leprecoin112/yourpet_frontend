import {
  Overlay,
  ModalContainer,
  IconClose,
  List,
  ListItem,
  TextWrapper,
  Text,
  ModalTitle,
  ModalImage,
  ModalComments,
  ButtonWrapper,
} from './NoticeModal.styled';

import IconCrossBig from '../Icons/IconCrossBig';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Contact } from '../Contact/Contact';
import { AddToFavorite } from '../AddToFavorite/AddToFavorite';

const modalRoot = document.querySelector('#modal-root');

export const NoticeModal = ({ onClose }) => {
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
        <List>
          <ListItem>
            <ModalImage></ModalImage>
            <ModalTitle>Сute dog looking for a home</ModalTitle>
            <TextWrapper>
                <Text>Name:{}</Text>
                <Text>Birthday:{}</Text>
                <Text>Breed:{}</Text>
                <Text>Place:{}</Text>
                <Text>The sex:{}</Text>
                <Text>Email:{}</Text>
                <Text>Phone:{}</Text>
            </TextWrapper>
            <ModalComments>
              Comments: Rich would be the perfect addition to an active family
              that loves to play and go on walks. I bet he would love having a
              doggy playmate too!
            </ModalComments>
          </ListItem>
        </List>
        <ButtonWrapper>
          <Contact />
          <AddToFavorite />
        </ButtonWrapper>
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};
