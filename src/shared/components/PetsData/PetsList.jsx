import { useSelector } from "react-redux";
import { PetsListWrapper, PetsNoData} from './PetsList.styled';
import { PetsItem }  from "../PetsData/PetsItem";


export const PetsList = () => {

  // НЕ ВИСТАЧАЄ БЕКА ПО ТВАРИНАМ
  // const pets = useSelector();

  // поки що пишу так, щоб перевірити компонент
  const pets = [
    {
      id: '0123',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_2RQ5XWDgqeWhAeNykTu5BHv8sNUAtyfFw&usqp=CAU',
      name: "Jack",
      birth: '22.04.2018',
      breed: "persian cat",
      comments: 'Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, he is a loyal and affectionate lap cat.'
  }, {
      id: '12345',
      photo: 'https://cdn.shopify.com/s/files/1/0609/7616/9215/files/betty-5.jpg?v=1642175999',
      name: "Jack",
      birth: '22.04.2018',
      breed: "dog",
      comments: "Jack is a beautiful dog",
  }];


  return (
    <PetsListWrapper>
    {pets.length > 0 ? pets.map((pet) => (<PetsItem key={pet.id} petData={pet}/>)) : <PetsNoData>You don't have any pets in list yet</PetsNoData>}
    </PetsListWrapper>
  );
}
