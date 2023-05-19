import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useParams } from 'react-router-dom';

import {
  NavLinksContainer,
  NavIsLogged,
  NavNotLogged,
  Link,
} from './NoticesCategoriesNav.styled';

const categories = {
  publicCategories: [
    ['sell', 'sell'],
    ['lost/found', 'lost/found'],
    ['in good hands', 'in good hands'],
  ],
  privateCategories: [
    ['favorite ads', 'favorite ads'],
    ['my ads', 'my ads'],
  ],
};

const NoticesCategoriesNav = () => {
  const { categoryName } = useParams();

  // const isLogged = useSelector(selectIsLoggedIn);
  const isLogged = true;

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
      {isLogged && (
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
