import PageHeading from '../../shared/components/PageHeading';
import NotFound from '../../shared/components/NotFound';
import { HeadingWrapper, RedirectLink, Icon } from './NotFoundPage.styled';
import Section from '../../shared/components/Section/Section';

const NotFoundPage = () => (
  <Section>
    <HeadingWrapper>
      <PageHeading text={'Ooops! '} styled="notFound" />
      <PageHeading text={'This page not found :('} styled="notFound" />
    </HeadingWrapper>
    <NotFound />
    <RedirectLink to="/main">
      To main page <Icon />
    </RedirectLink>
  </Section>
);

export default NotFoundPage;
