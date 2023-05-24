import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {
  useGetNoticesByParamsQuery,
  useGetFavoriteNoticesQuery,
  useGetOwnNoticesQuery,
} from '../../shared/redux/api/backend/notices/noticesApi';

import NoticesCategoriesNav from '../../module/Notices/NoticesCategoriesNav';
import NoticesCategoriesList from '../../module/Notices/NoticesCategoriesList';
import AddPetModal from '../../shared/components/AddPetModal/AddPetModal';
import { useAuth } from '../../shared/hooks/useAuth';

import {
  Heading,
  ErrorMessage,
  ButtonsWrapper,
  MobileAddButton,
  AddButton,
  FiltersWrapper,
} from './NoticesPage.styled';
import Loader from '../../shared/components/Loader';
import NoticesSearch from '../../shared/components/SearchComponent/NoticesSearch';
import { useLocation, useNavigate } from 'react-router-dom';
import Section from '../../shared/components/Section/Section';
import Container from '../../shared/components/Container/Container';
import Filter from '../../shared/components/Filter';
import Pagination from '../../shared/components/Pagination/Pagination';
import { IconPlusBig, IconPlusSmall } from '../../shared/components/Icons';
import { toast } from 'react-toastify';

const NoticesPage = () => {
  const [category, setCategory] = useState('sell');
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

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
    default:
      query = useGetNoticesByParamsQuery;
  }

  const { data, error, isFetching, isLoading, isError } = query({
    title,
    category,
    page,
    limit: 12,
  });

  const handleFormSubmit = value => {
    setTitle(value);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

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

  const isLoader = isLoading || isFetching;
  if (!isLoader) {
    if (error) {
      if (error.status === 404) {
        toast.error(error.data.message);
      }
    }
  }

  return (
    <Section>
      <Container>
        <Heading text={'Find your favorite pet'} />
        <NoticesSearch onFormSubmit={handleFormSubmit} />
        <FiltersWrapper>
          <NoticesCategoriesNav />
          <ButtonsWrapper>
            {/* <Filter/> */}
            <MobileAddButton
              onClick={isLoggedIn ? () => navigate('/add-pet') : toggleModal}
            >
              <IconPlusBig /> Add pet
            </MobileAddButton>
            <AddButton
              onClick={isLoggedIn ? () => navigate('/add-pet') : toggleModal}
            >
              Add Pet
              <IconPlusSmall />
            </AddButton>
          </ButtonsWrapper>
        </FiltersWrapper>
        {isLoader && <Loader />}
        {data ? (
          <NoticesCategoriesList items={data?.result ?? data?.notices} />
        ) : (
          <ErrorMessage>
            Ooops, there is no notices in this category
          </ErrorMessage>
        )}
        {data?.totalResult > 12 && (
          <Pagination
            currentPage={Number(page)}
            totalPagesCount={data?.totalPages}
            onPageChange={onPageChange}
          />
        )}
        {isModalOpen && <AddPetModal toggleModal={toggleModal} />}
      </Container>
    </Section>
  );
};

export default NoticesPage;
