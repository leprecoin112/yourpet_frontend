import Section from './../components/Section/Section';
import Container from './../components/Container/Container';
import { Suspense, Fragment } from 'react';
import { Routes } from 'react-router-dom';
import Header from '../components/Header/Header';

const SharedLayout = ({ children }) => {
  return (
    <Fragment>
      <header>
        <Container>
          <Header />
        </Container>
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>{children}</Routes>
        </Suspense>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </Fragment>
  );
};

export default SharedLayout;
