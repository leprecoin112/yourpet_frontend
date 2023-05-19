
import { createPortal } from "react-dom";
import { useEffect } from "react";
import IconCrossBig from "../Icons/IconCrossBig";
import {
  Overlay,
  ModalContainer,
  IconClose,
  ModalText,
  ModalBtn,
  ModalBtnYes,
  BtnWrapper,
} from "./ModalApproveAction.styled";
import IconLogout from "../Icons/IconLogout";

const modalRoot = document.querySelector('#modal-root');

const ModalApproveAction = ({onClose, text, redirect }) => {
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

  const handleLogout = () => {
    console.log('logout');
  }
  
  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <IconClose onClick={onClose}><IconCrossBig /></IconClose>
        <ModalText>{text}</ModalText>
        <BtnWrapper>
          <ModalBtn onClick={onClose}>Cancel</ModalBtn>
          <ModalBtnYes to={redirect} onClick={handleLogout}>Yes<IconLogout/></ModalBtnYes>
        </BtnWrapper>
      </ModalContainer>
    </Overlay>, modalRoot)
}

export default ModalApproveAction;