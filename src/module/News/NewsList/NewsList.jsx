import PropTypes from 'prop-types';
import NewsItem from '../NewsItems/NewsItem';
import { List } from './NewsList.styled';

export default function NewsList({ data }) {
  console.log(data);
  return (
    <>
      <List>
        {data?.map(({ title, url, date, imgUrl, text, id }) => (
          <NewsItem
            key={id}
            title={title}
            url={url}
            text={text}
            date={date}
            imgUrl={imgUrl}
          />
        ))}
      </List>
    </>
  );
}

NewsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};
