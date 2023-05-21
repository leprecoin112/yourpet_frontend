import React, { useEffect, useState } from 'react';
import NoticesCategoriesNav from '../../module/Notices/NoticesCategoriesNav';
import NoticesCategoriesList from '../../module/Notices/NoticesCategoriesList';
import { useGetNoticesByParamsQuery} from '../../shared/redux/api/backend/notices/noticesApi';
import { ErrorMessage, ButtonsWrapper, MobileAddButton, AddButton } from './NoticesPage.styled';
import Loader from '../../shared/components/Loader';
import NoticesSearch from '../../shared/components/SearchComponent/NoticesSearch';
import { useLocation } from 'react-router-dom';
import Section from '../../shared/components/Section/Section';
import Container from '../../shared/components/Container/Container';
import Filter from '../../shared/components/Filter';
import { IconPlusBig, IconPlusSmall } from '../../shared/components/Icons';

const NoticesPage = () => {
  const [category, setCategory] = useState('sell');
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const categoryName = location.pathname.split('/')[2];
    setCategory(categoryName ?? '');
  }, [location]);

  const { data: notices, isFetching } = useGetNoticesByParamsQuery(category, title);

  const onSearch = title => {
    setTitle(title.trim());
  };

  const toggleCategory = data => {
    if (category !== data) {
      setCategory(data);
    } else setCategory('');
  };

  console.log(notices)

  return (
    <Section>
      <Container>
        <NoticesSearch onFormSubmit={onSearch} />
        <NoticesCategoriesNav onCategory={toggleCategory} />
        <ButtonsWrapper>
          <Filter />
          <MobileAddButton><IconPlusBig /> Add pet</MobileAddButton>
          <AddButton>Add Pet<IconPlusSmall/></AddButton>
        </ButtonsWrapper>
        {isFetching && <Loader />}
        {notices ? (
          <NoticesCategoriesList data={notices} />
        ) : (
          <ErrorMessage>
            Ooops, there is no notices in this category
          </ErrorMessage>
        )}
      </Container>
    </Section>
  );
};

export default NoticesPage;