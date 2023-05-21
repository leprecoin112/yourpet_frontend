import React from 'react';
import { Wrapper } from './UserNav.styled';
import { IconUser } from '../../Icons';
import { useAuth } from '../../../hooks/useAuth';

const UserNav = () => {
  const { user } = useAuth();
  return (
    <Wrapper to="user">
      <IconUser />
      <span>{user.name}</span>
    </Wrapper>
  );
};

export default UserNav;
