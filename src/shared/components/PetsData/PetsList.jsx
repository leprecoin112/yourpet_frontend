import { useSelector } from 'react-redux';
import { PetsListWrapper, PetsNoData } from './PetsList.styled';
import { PetsItem } from '../PetsData/PetsItem';
import { useGetUserPetsQuery } from '../../redux/api/backend/user/userApi';

export const PetsList = () => {
  const { data: pets } = useGetUserPetsQuery();

  return (
    <PetsListWrapper>
      {pets?.length > 0 ? (
        pets.map(pet => <PetsItem key={pet.id} petData={pet} />)
      ) : (
        <PetsNoData>You don't have any pets in list yet</PetsNoData>
      )}
    </PetsListWrapper>
  );
};
