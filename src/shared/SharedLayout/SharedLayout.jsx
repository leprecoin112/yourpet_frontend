import Section from './../components/Section/Section';
import Container from './../components/Container/Container';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <header>
         <Section>
          <Container>
           <Header/>
          </Container>
        </Section>
      </header>
      <main>
        <Section>
          <Container>
            <Suspense fallback={<p>Loading...</p>}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default SharedLayout;
