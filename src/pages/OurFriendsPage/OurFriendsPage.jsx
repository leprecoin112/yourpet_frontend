import React, { useEffect } from 'react';
import OurFriendsList from './OurFriendsList';
import Container from '../../shared/components/Container/Container';
import { Title } from './OurFriendsPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFriends } from '../../shared/redux/friends/operations';
import { getAllFriends, loading } from '../../shared/redux/friends/selectors';
import Loader from '../../shared/components/Loader';

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  const ourFriendsList = useSelector(getAllFriends);
  const isLoading = useSelector(loading);
 
  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <Container>
      <Title>Our Friends</Title>
      {isLoading && <Loader />}
      <OurFriendsList data={ourFriendsList} />
    </Container>
  );
};

export default OurFriendsPage;
