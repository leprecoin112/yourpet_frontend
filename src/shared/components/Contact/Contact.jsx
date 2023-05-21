import { ButtonWrapper, ContactButton } from './Contact.styled';

export const Contact = () => {
  return (
    <ButtonWrapper>
      <ContactButton href="tel:123456789">
        Contact
      </ContactButton>
      
    </ButtonWrapper>
  );
};