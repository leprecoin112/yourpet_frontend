import { nanoid } from '@reduxjs/toolkit';

const items = [
  {
    id: nanoid(),
    to: '/news',
    text: 'News',
  },
  {
    id: nanoid(),
    to: '/notices/sell',
    text: 'Find pet',
  },
  {
    id: nanoid(),
    to: '/friends',
    text: 'Our friends',
  },
];

export default items;
