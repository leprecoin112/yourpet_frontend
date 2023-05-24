import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import {
  AddButtonContainer,
  AddButtonLabel,
  AddButton,
  AddButtonIcon,
} from './AddPetButton.styled';

const AddPetButton = ({ user, children }) => {
  const {isLoggedIn} = useAuth();
  const navigate = useNavigate();

  const toastMss = () => {
    return toast.dismiss(), toast.warning('Please login');
  };

  return (
    <>
      <AddButtonContainer>
        <AddButton
          type="button"
          title="Add pet"
          onClick={!isLoggedIn ? () => toastMss() : () => navigate('/add-pet')}
        >
          <AddButtonLabel>Add pet</AddButtonLabel>
          <AddButtonIcon />
        </AddButton>

        <ToastContainer />
      </AddButtonContainer>
    </>
  );
};

export default AddPetButton;
