import React from 'react';
import { PageContainer, PageTitle } from './MainPage.styled';
import Section from '../../shared/components/Section/Section';
import Container from '../../shared/components/Container/Container';

const MainPage = () => {
  return (
    <Section>
      <Container>
        <PageContainer>
          <PageTitle>Take good care of your small pets</PageTitle>
        </PageContainer>
      </Container>
    </Section>
  );
};

export default MainPage;
