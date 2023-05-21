import React, { useEffect, useState } from 'react';
import NoticesCategoriesNav from '../../module/Notices/NoticesCategoriesNav';
import NoticesCategoriesList from '../../module/Notices/NoticesCategoriesList';
import { useGetNoticesByParamsQuery} from '../../shared/redux/api/backend/notices/noticesApi';
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
  const [title, setTitle] = useState('');
  const location = useLocation();
  console.log(location)

  useEffect(() => {
    const categoryName = location.pathname.split('/')[2];
    setCategory(categoryName ?? '');
  }, [location]);

  console.log(category)

  const { data: notices, isFetching } = useGetNoticesByParamsQuery({title, category});

  const onSearch = title => {
    setTitle(title.trim());
  };

  return (
    <Section>
      <Container>
        <NoticesSearch onFormSubmit={onSearch} />
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
        {notices ? (
          <NoticesCategoriesList data={notices} />
        ) : (
          <ErrorMessage>
            Ooops, there is no notices in this category
          </ErrorMessage>
        )}
        {/* <Pagination/> */}
      </Container>
    </Section>
  );
};

export default NoticesPage;