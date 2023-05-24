import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { IconCrossBig, IconPaw } from '../Icons';
import {
    Backdrop,
    Modal,
    CloseIcon,
    Title,
    Wrapper,
    LoginButton,
    RegisterButton,
} from './AddPetModal.styled';

const modalRoot = document.querySelector('#modal-root');

const AddPetModal = ({ toggleModal }) => {
    const closeModal = ({ target, currentTarget, code }) => {
        if (target === currentTarget || code === 'Escape') {
        toggleModal();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', closeModal);

        return () => document.removeEventListener('keydown', closeModal);
    });

    return createPortal(
        <Backdrop onClick={closeModal}>
            <Modal>
                <CloseIcon onClick={toggleModal}>
                    <IconCrossBig />
                </CloseIcon>
                <Title>To add pet please login or register</Title>
                    <Wrapper>
                <LoginButton to="/login">
                    Log IN
                    <IconPaw />
                </LoginButton>
                <RegisterButton to="/register">Registration</RegisterButton>
                </Wrapper>
            </Modal>
        </Backdrop>,
        modalRoot
    );
};

export default AddPetModal;