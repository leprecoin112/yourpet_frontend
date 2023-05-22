import React from 'react';
import OurFriendsList from '../../module/OurFriends/OurFriendsList/OurFriendsList';
import Container from '../../shared/components/Container/Container';
import { Title } from './OurFriendsPage.styled';
import Loader from '../../shared/components/Loader';
import { useAllSponsorsQuery } from '../../shared/redux/api/backend/sponsors/sponsorsApi';
import Section from '../../shared/components/Section/Section';

const OurFriendsPage = () => {
  const { data, isFetching, isLoading } = useAllSponsorsQuery();
  const isLoader = isLoading || isFetching;
  return (
    <Section>
      <Container>
        <Title>Our Friends</Title>
        {isLoader && <Loader />}
        <OurFriendsList data={data?.result} />
      </Container>
    </Section>
  );
};

export default OurFriendsPage;
