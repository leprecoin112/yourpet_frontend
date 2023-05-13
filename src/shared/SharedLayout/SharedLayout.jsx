import Section from "./../components/Section/Section";
import Container from "./../components/Container/Container";
import { Suspense, Fragment } from "react";
import { Routes } from "react-router-dom";
import Header from "../components/Header/Header";

const SharedLayout = ({ children }) => {
  return (
    <Fragment>
      <header>
        <Section>
          <Container>
            <Header />
          </Container>
        </Section>
      </header>
      <main>
        <Section>
          <Container>
            <Suspense fallback={<p>Loading...</p>}>
              <Routes>{children}</Routes>
            </Suspense>
          </Container>
        </Section>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </Fragment>
  );
};

export default SharedLayout;
