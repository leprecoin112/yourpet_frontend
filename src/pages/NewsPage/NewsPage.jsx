import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoticesSearch from '../../shared/components/SearchComponent/NoticesSearch';
import NewsList from '../../module/News/NewsList/NewsList';
import Container from '../../shared/components/Container/Container';
import { Title } from './NewsPage.styled';
import Pagination from '../../shared/components/Pagination/Pagination';
import {
  useAllNewsQuery,
  useSearchNewsQuery,
} from '../../shared/redux/api/backend/news/newsApi';

const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;
  const searchQuery = searchParams.get('query');
  console.log(page);
  const { data, error } = useSearchNewsQuery('d', page);
  console.log(data);

  const [filter, setFilter] = useState('');

  const handleSubmit = query => {};

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
      {data && (
        <>
          <NewsList data={data.news} />
          <Pagination
            currentPage={Number(page)}
            totalPagesCount={data?.totalPages}
            onPageChange={page => onPageChange(page)}
          />
        </>
      )}
    </Container>
  );
};

export default NewsPage;
