import { List } from './NoticesCategoriesList.styled';
import NoticeCategoryItem from '../NoticeCategoryItem';
import { useGetFavoriteNoticesQuery } from '../../../shared/redux/api/backend/notices/noticesApi';

const NoticesCategoriesList = ({ items }) => {
  const { data } = useGetFavoriteNoticesQuery();

  const card = items.map(
    ({ _id, birthday, photo, category, location, owner, sex, title }) => (
      <NoticeCategoryItem
        key={_id}
        id={_id}
        birthday={birthday}
        image={photo}
        category={category}
        location={location}
        title={title}
        sex={sex}
        owner={owner}
        favorites={data}
      />
    )
  );
  return <List>{card}</List>;
};

export default NoticesCategoriesList;
