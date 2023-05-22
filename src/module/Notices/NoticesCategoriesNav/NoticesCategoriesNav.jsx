import { useParams } from 'react-router-dom';
import { useAuth } from '../../../shared/hooks/useAuth';
import {
  NavLinksContainer,
  NavIsLogged,
  NavNotLogged,
  Link,
} from './NoticesCategoriesNav.styled';
import { useEffect } from 'react';

const categories = {
  publicCategories: [
    ['sell', 'sell'],
    ['lost-found', 'lost/found'],
    ['in-good-hands', 'in good hands'],
  ],
  privateCategories: [
    ['favorite-ads', 'favorite ads'],
    ['my-ads', 'my ads'],
  ],
};

const NoticesCategoriesNav = () => {
  const { categoryName } = useParams();
  const { isLoggedIn } = useAuth();

  return (
    <NavLinksContainer>
      <NavIsLogged>
        {categories.publicCategories.map(([category, name], index) => (
          <Link
            className={categoryName === category ? 'active' : ''}
            to={`/notices/${category}`}
            key={name + index}
          >
            {name}
          </Link>
        ))}
      </NavIsLogged>
      {isLoggedIn && (
        <NavNotLogged>
          {categories.privateCategories.map(([category, name], index) => (
            <Link
              className={categoryName === category ? 'active' : ''}
              to={`/notices/${category}`}
              key={name + index}
            >
              {name}
            </Link>
          ))}
        </NavNotLogged>
      )}
    </NavLinksContainer>
  );
};

export default NoticesCategoriesNav;
