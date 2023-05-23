import { Backdrop, Cat, Paw, Shake, Tail, Main, Head, Body, Leg, Face, Nose, MustacheCont, MustacheLeft, MustacheRight, Eye, BrowCont, Brow, EarLeft, InnerLeft, EarRight, InnerRight, Outer } from './Loader.styled';

const Loader = () => (
  <Backdrop>
    <Cat>
      <Paw />
      <Paw />
      <Shake>
        <Tail />
        <Main>
          <Head />
          <Body>
            <Leg />
          </Body>
          <Face>
            <MustacheCont>
              <MustacheLeft />
              <MustacheRight />
            </MustacheCont>
            <MustacheCont>
              <MustacheLeft />
              <MustacheRight />
            </MustacheCont>
            <Nose />
            <Eye />
            <Eye />
            <BrowCont>
              <Brow />
              <Brow />
            </BrowCont>
            <BrowCont>
              <Brow />
              <Brow />
            </BrowCont>
            <EarLeft>
              <InnerLeft />
            </EarLeft>
            <EarRight>
              <Outer />
              <InnerRight />
            </EarRight>
          </Face>
        </Main>
      </Shake>
    </Cat>
  </Backdrop>
);

export default Loader;