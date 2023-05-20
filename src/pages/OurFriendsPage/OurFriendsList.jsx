import PropTypes from 'prop-types';
import OurFriendsItem from './OurFriendsItem';
import { List } from './OurFriendsList.styled';

export default function OurFriendsList({ data }) {
    return (
        <>
            <List>
                {data?.map(({ id, title, addressUrl, imgUrl, address, workDays, phone, email }) => (
                    <OurFriendsItem
                        key={id}
                        title={title}
                        addressUrl={addressUrl}
                        address={address}
                        workDays={workDays}
                        imgUrl={imgUrl}
                        phone={phone}
                        email={email}
                    />
                ))}
            </List>
        </>
    );
}

OurFriendsItem.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            addressUrl: PropTypes.string.isRequired,
            imgUrl: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
            workDays: PropTypes.arrayOf
            (PropTypes.shape({
                isOpen: PropTypes.boolean,
                from: PropTypes.string,
                to: PropTypes.string,
            })).isRequired,
            phone: PropTypes.string,
            email: PropTypes.string,
        })
    ).isRequired,
};
