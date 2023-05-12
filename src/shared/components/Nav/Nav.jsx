import React from 'react';
import items from './items';
import { Li, Link, NavEl  } from './Nav.styled';

const Nav = () => {
  const elements = items.map(({ id, to, text }) => (
    <Li key={id}>
      <Link to={to}>{text}</Link>
    </Li>
  ));
  return (
    <NavEl>
      {elements}
   </NavEl>
  )
}

export default Nav