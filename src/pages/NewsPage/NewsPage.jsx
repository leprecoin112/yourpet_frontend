import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoticesSearch from '../../shared/components/SearchComponent/NoticesSearch';
import NewsList from '../../module/News/NewsList/NewsList';
import Container from '../../shared/components/Container/Container';
import { Title } from './NewsPage.styled';
import Pagination from '../../shared/components/Pagination/Pagination';
import { useNewsQuery } from '../../shared/redux/api/backend/news/newsApi';

const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const query = searchParams.get('query') ?? '';
  const { data, error } = useNewsQuery({ title: query, page, limit: 6 });

  const handleFormSubmit = value => {
    if (query !== value) {
      setSearchParams({ query: value });
    }
  };

  const onPageChange = currentPage => {
    if (page === currentPage) {
      return;
    }

    setPage(currentPage);
  };

  if (error) {
    if (error.status === 404) {
      toast.error(error.data.message);
    }
  }

  return (
    <Container>
      <Title>News</Title>
      <NoticesSearch onFormSubmit={handleFormSubmit} />
      {data && (
        <>
          <NewsList data={data.news} />
          <Pagination
            currentPage={Number(page)}
            totalPagesCount={data?.totalPages}
            onPageChange={onPageChange}
          />
        </>
      )}
    </Container>
  );
};

export default NewsPage;
