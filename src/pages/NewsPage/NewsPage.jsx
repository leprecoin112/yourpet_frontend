import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NewsList from './NewsList';
import NewsFilter from './NewsFilter';
import Container from '../../shared/components/Container/Container';
import { Title } from './NewsPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../shared/redux/news/operations';
import { getAllNews } from '../../shared/redux/news/selectors';

const NewsPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(getAllNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const [filter, setFilter] = useState('');
  const [inputValue, setInputValue] = useState(false);

  const handleChange = event => {
    setFilter(event.currentTarget.value);
  };

  useEffect(() => {
    setFilter('');
    setFilter(filter => {
      if (filter.length > 0) {
        setInputValue(true);
      } else {
        setInputValue(false);
      }
      return filter;
    });
  }, [filter]);

  const filterNews = () => {
    if (!filter) {
      return data;
    }
    const normalizedFilter = filter.toLowerCase();
    const filteredList = data.filter(news => {
      return news.title.toLowerCase().includes(normalizedFilter);
    });

    if (filteredList.length === 0) {
      toast.warning('Write a correct request');
    }
    return filteredList;
  };

  return (
    <Container>
      <Title>News</Title>
      <NewsFilter
        input={filter}
        onChange={handleChange}
        resetInput={() => setFilter('')}
        inputValue={inputValue}
      />
      <NewsList data={filterNews()} />
    </Container>
  );
};

export default NewsPage;
