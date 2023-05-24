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
import Loader from '../../shared/components/Loader/Loader';

const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const query = searchParams.get('query') ?? '';
  const { data, error, isFetching, isLoading } = useNewsQuery(
    {
      title: query,
      page,
      limit: 6,
    },
    {
      selectFromResult: ({ data }) => ({
        data: data ?? [],
      }),
    }
  );

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
  const isLoader = isLoading || isFetching;
  if (!isLoader) {
    if (error) {
      if (error.status === 404) {
        toast.error(error.data.message);
      }
    }
  }

  return (
    <Container>
      <Title>News</Title>
      <NoticesSearch onFormSubmit={handleFormSubmit} />
      {isLoader ? (
        <Loader />
      ) : (
        data && (
          <>
            <NewsList data={data?.news} />
            <Pagination
              currentPage={Number(page)}
              totalPagesCount={data?.totalPages}
              onPageChange={onPageChange}
            />
          </>
        )
      )}
    </Container>
  );
};

export default NewsPage;
