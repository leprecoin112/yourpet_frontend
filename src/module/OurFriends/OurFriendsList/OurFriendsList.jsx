import PropTypes from 'prop-types';
import OurFriendsItem from '../OurFriendsItem/OurFriendsItem';
import { List } from './OurFriendsList.styled';

export default function OurFriendsList({ data }) {
  return (
    <>
      <List>
        {data?.map(
          ({
            _id,
            title,
            addressUrl,
            imageUrl,
            address,
            workDays,
            phone,
            email,
          }) => (
            <OurFriendsItem
              key={_id}
              title={title}
              addressUrl={addressUrl}
              address={address}
              workDays={workDays}
              imageUrl={imageUrl}
              phone={phone}
              email={email}
            />
          )
        )}
      </List>
    </>
  );
}

OurFriendsItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      addressUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      workDays: PropTypes.arrayOf(
        PropTypes.shape({
          isOpen: PropTypes.boolean,
          from: PropTypes.string,
          to: PropTypes.string,
        })
      ).isRequired,
      phone: PropTypes.string,
      email: PropTypes.string,
    })
  ),
};
