import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoticesSearch from '../../shared/components/SearchComponent/NoticesSearch';
import NewsList from './NewsList';
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

  const filterNews = () => {
    if (!filter) {
      return data;
    }
    const normalizedFilter = filter.toLowerCase();
    const filteredList = data.filter(news => {
      return news.title.toLowerCase().includes(normalizedFilter);
    });

    if (filteredList.length === 0) {
      toast.dismiss();
      toast.warning('Write a correct request');
    }
    return filteredList;
  };

  const handleSubmit = query => {
    setFilter(query);
  };

  return (
    <Container>
      <Title>News</Title>
      <NoticesSearch onFormSubmit={handleSubmit} />
      <NewsList data={filterNews()} />
      <ToastContainer />
    </Container>
  );
};

export default NewsPage;
