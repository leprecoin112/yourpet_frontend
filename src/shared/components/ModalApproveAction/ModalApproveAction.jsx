import { createPortal } from "react-dom";
import { useEffect } from "react";
import { IconCrossBig } from '../Icons';
import { Backdrop, Modal, BtnWrapper, BtnCancel, BtnConfirm, CloseIcon } from './ModalApproveAction.styled';

const modalRoot = document.querySelector('#modal-root');

const ModalApproveAction = ({ toggleModal, onYes, children, icon }) => {

    const closeModal = ({ target, currentTarget, code }) => {
        if (target === currentTarget || code === 'Escape'){
            toggleModal();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', closeModal);

        return () => document.removeEventListener('keydown', closeModal);
    });


    return (
        createPortal(
            <Backdrop onClick={closeModal}>
                <Modal>
                    <CloseIcon onClick={toggleModal} >
                        <IconCrossBig/>
                    </CloseIcon>
                    {children}
                    <BtnWrapper>
                        <BtnCancel onClick={closeModal}>Cancel</BtnCancel>
                        <BtnConfirm onClick={() => onYes()}>Yes {icon}</BtnConfirm>
                    </BtnWrapper>
                </Modal>
            </Backdrop>,
            modalRoot
    ));
}

export default ModalApproveAction;