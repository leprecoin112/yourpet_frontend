import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { formatDate } from '../../../shared/utils/dateUtils';
import DecorativeLine from '../../../shared/components/DecorativeLine/DecorativeLine';
import {
  Item,
  Poster,
  NewsBody,
  NewsTitle,
  TextContent,
  BottomInfoWrapper,
  NewsDate,
  NewsLink,
  Container,
} from './NewsItem.styled';

export default function NewsItem({ title, url, date, imgUrl, text }) {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 1280px)').matches
  );
  useEffect(() => {
    window
      .matchMedia('(min-width: 1280px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const formattedDate = formatDate(date);

  return (
    <>
      <Item>
        <DecorativeLine />
        <Container>
          <Poster src={imgUrl} width="100" alt={title} />
          <TextContent>
            <NewsTitle
              text={title}
              tooltip={title}
              length={Number(`${matches ? 50 : 35}`)}
            />
            <NewsBody text={text} length={230} />

            <BottomInfoWrapper>
              <NewsDate>{formattedDate}</NewsDate>
              <NewsLink href={url} target="_blank" rel="noreferrer">
                Read more
              </NewsLink>
            </BottomInfoWrapper>
          </TextContent>
        </Container>
      </Item>
    </>
  );
}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
