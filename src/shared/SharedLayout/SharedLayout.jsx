import Section from "./../components/Section/Section";
import Container from "./../components/Container/Container";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <header>
        <p>Header</p>
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
