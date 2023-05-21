import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoticesSearch from '../../shared/components/SearchComponent/NoticesSearch';
import NewsList from '../../module/News/NewsList/NewsList';
import Container from '../../shared/components/Container/Container';
import { Title } from './NewsPage.styled';
import Pagination from '../../shared/components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import {
  useAllNewsQuery,
  useSearchNewsQuery,
} from '../../shared/redux/api/backend/news/newsApi';

const NewsPage = () => {
  const [totalPages, setTotalPages] = useState(null);
  //const { totalHints, hints } = useSelector(getHints);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;
  const searchQuery = searchParams.get('query');
  const { data } = useSearchNewsQuery();

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

  const onPageChange = currentPage => {
    if (page === currentPage) {
      return;
    }
    var params = searchQuery
      ? { query: searchQuery, page: currentPage }
      : { page: currentPage };
    setSearchParams(params);
  };

  return (
    <Container>
      <Title>News</Title>
      <NoticesSearch onFormSubmit={handleSubmit} />
      <NewsList data={filterNews()} />
      <ToastContainer />
      <Pagination
        currentPage={Number(page)}
        totalPagesCount={totalPages}
        onPageChange={page => onPageChange(page)}
      />
    </Container>
  );
};

export default NewsPage;
