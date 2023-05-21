import { List } from "./NoticesCategoriesList.styled";
import { ageCounter } from "../../../shared/redux/helpers/ageCounter";
import NoticeCategoryItem from "../NoticeCategoryItem";

const NoticesCategoriesList = ({ data }) => {
    const { result } = data;
    console.log(result);
    const card = result.map(({ _id, birthday, photo, category, location, name, sex }) => (
        <NoticeCategoryItem
            key={_id}
            id={_id}
            birthday={birthday}
            image={photo}
            category={category}
            location={location}
            name={name}
            sex={sex}
        />
    ));
    return (
        <List>{card}</List>
    )
}

export default NoticesCategoriesList;