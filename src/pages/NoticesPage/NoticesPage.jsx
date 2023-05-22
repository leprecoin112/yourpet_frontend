import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useGetNoticesByParamsQuery, useGetFavoriteNoticesQuery, useGetOwnNoticesQuery } from '../../shared/redux/api/backend/notices/noticesApi';

import NoticesCategoriesNav from '../../module/Notices/NoticesCategoriesNav';
import NoticesCategoriesList from '../../module/Notices/NoticesCategoriesList';

import { ErrorMessage, ButtonsWrapper, MobileAddButton, AddButton, FiltersWrapper } from './NoticesPage.styled';
import Loader from '../../shared/components/Loader';
import NoticesSearch from '../../shared/components/SearchComponent/NoticesSearch';
import { useLocation } from 'react-router-dom';
import Section from '../../shared/components/Section/Section';
import Container from '../../shared/components/Container/Container';
import Filter from '../../shared/components/Filter';
import Pagination from '../../shared/components/Pagination/Pagination';
import { IconPlusBig, IconPlusSmall } from '../../shared/components/Icons';

const NoticesPage = () => {
  const [category, setCategory] = useState('sell');
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState('');
  const location = useLocation();

  let query = useGetNoticesByParamsQuery;

  switch (category) {
    case 'my-ads':
      query = useGetOwnNoticesQuery;
      break;
    
    case 'favorite-ads':
      query = useGetFavoriteNoticesQuery;
      break;
    
    case 'lost-found':
    case 'in-good-hands':
    case 'sell':
      query = useGetNoticesByParamsQuery;
      break;
  }

  const {
    data,
    isFetching,
  } = query({ title, category, page, limit: 12 });
  
  const handleFormSubmit = value => {
    setTitle(value);
  };

  const onPageChange = currentPage => {
    if (page === currentPage) {
      return;
    }

    setPage(currentPage);
  };

  useEffect(() => {
    const categoryName = location.pathname.split('/')[2];
    setCategory(categoryName ?? '');
  }, [location]);


  return (
    <Section>
      <Container>
        <NoticesSearch onFormSubmit={handleFormSubmit} />
        <FiltersWrapper>
          <NoticesCategoriesNav />
          <ButtonsWrapper>
            <Filter />
            <MobileAddButton to={'/add-pet'}>
              <IconPlusBig /> Add pet
            </MobileAddButton>
            <AddButton to={'/add-pet'}>
              Add Pet
              <IconPlusSmall />
            </AddButton>
          </ButtonsWrapper>
        </FiltersWrapper>
        {isFetching && <Loader />}
        {data ? (
          <NoticesCategoriesList items={data.result} />
        ) : (
          <ErrorMessage>
            Ooops, there is no notices in this category
          </ErrorMessage>
        )}
        {data?.totalPages && (
          <Pagination
            currentPage={Number(page)}
            totalPagesCount={data?.totalPages}
            onPageChange={onPageChange}
          />
        )}
      </Container>
    </Section>
  );
};

export default NoticesPage;