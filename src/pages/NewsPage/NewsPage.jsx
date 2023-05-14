import NewsList from './NewsList';
import NewsFilter from './NewsFilter';
import { useState, useEffect } from 'react';

import Container from '../../shared/components/Container/Container';

import { Title } from './NewsPage.styled';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useDispatch, useSelector } from 'react-redux';

import { fetchNews } from '../../shared/redux/news/operations';
import { getAllNews, } from '../../shared/redux/news/selectors';

const NewsPage = () => {

  const dispatch = useDispatch();
  const data = useSelector(getAllNews);

  useEffect(() => {
    const fetchAllNews = async () => await dispatch(fetchNews());
    fetchAllNews();
  }, [dispatch]);

  const [filter, setFilter] = useState('');
  const [inputValue, setInputValue] = useState(false);

  const handleChange = event => {

    setFilter(event.currentTarget.value);
  };

  useEffect(() => {
    filter.length > 0 ? setInputValue(true) : setInputValue(false);
  }, [filter.length]);

  const resetInput = event => {
    setFilter('');
  };

  function filterNews() {
    if (!filter) {
      return data;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filterlist = data.filter(news => {
      return news.title.toLocaleLowerCase().includes(normalizedFilter);
    });

    if (filterlist.length === 0) {
      Notify.warning('Write a correct request');
    }
    return filterlist;
  }

  return (
    <Container>
      <Title> News</Title>
      <NewsFilter
        input={filter}
        onChange={handleChange}
        resetInput={resetInput}
        inputValue={inputValue}
      />
      <NewsList data={filterNews()} />
    </Container>
  );
};

export default NewsPage;