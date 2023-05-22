import PropTypes from 'prop-types';
import {
  Title,
  Field,
  Item,
  ItemContainer,
  Logo,
  LogoWrapper,
  Link,
  TimeInfo,
} from './OurFriendsItem.styled';

export default function OurFriendsItem({
  _id,
  title,
  addressUrl,
  imageUrl,
  address,
  workDays,
  phone,
  email,
}) {
  return (
    <Item key={_id}>
      <Title>{title}</Title>
      <ItemContainer>
        <LogoWrapper>
          <Logo src={imageUrl} alt={title} />
        </LogoWrapper>

        <div>
          <Field>Time: </Field>
          <TimeInfo>
            {workDays === null ? 'day and night' : `09.00 : 17.00`}
          </TimeInfo>
          <Field>Address:</Field>
          <Link
            href={`https://maps.google.com/?q=${addressUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {address}
          </Link>

          <Field>Phone:</Field>
          <Link href={`tel:${phone}`}>{phone}</Link>
          <Field>Email:</Field>
          <Link href={`mailto:${email}`}>{email}</Link>
        </div>
      </ItemContainer>
    </Item>
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
  ).isRequired,
};
