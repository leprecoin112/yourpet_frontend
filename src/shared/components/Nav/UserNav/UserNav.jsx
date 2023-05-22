import React from 'react';
import { Wrapper } from './UserNav.styled';
import { IconUser } from '../../Icons';
import { useGetUserQuery } from '../../../redux/api/backend/user/userApi';

const UserNav = () => {
  const { data } = useGetUserQuery();
  return (
    <Wrapper to="user">
      <IconUser />
      <span>{data?.name}</span>
    </Wrapper>
  );
};

export default UserNav;
