import { Suspense, Fragment } from 'react';
import { Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Loader from '../components/Loader/Loader';
import Container from '../components/Container/Container';

const SharedLayout = ({ children }) => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Suspense
          fallback={
            <Container>
              <Loader />
            </Container>
          }
        >
          <Routes>{children}</Routes>
        </Suspense>
      </main>
    </Fragment>
  );
};

export default SharedLayout;
