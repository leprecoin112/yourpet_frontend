
import {
  Overlay,
  ModalContainer,
  IconClose,
  ModalTitle,
  ModalText,
  ModalBtn,
} from "./CongratsModal.styled";

import IconCrossBig from "../Icons/IconCrossBig";
import IconPaw from '../Icons/IconPaw';
import { createPortal } from "react-dom";
import { useEffect } from "react";

const modalRoot = document.querySelector('#modal-root');

const CongratsModal = ({ onClose }) => {
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
        <IconClose onClick={onClose}><IconCrossBig /></IconClose>
        <ModalTitle>Congrats!</ModalTitle>
        <ModalText>Yours registration is success</ModalText>
        <ModalBtn onClick={onClose}>Go to profile <IconPaw/></ModalBtn>
      </ModalContainer>
    </Overlay>, modalRoot)
};

export default CongratsModal;