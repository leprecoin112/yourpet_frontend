// import { Button } from "./App.styled";
// import logo from "../src/shared/images/logo.svg";
import Button from "./shared/components/Button/Button";

function App() {
  return (
    <>
      <div>
        <Button styled="add" margin={10} />
      </div>
      <div>
        <Button styled="learnMore" margin={10} />
      </div>
      <div>
        <Button styled="learnMore like" margin={10} />
      </div>
      <div>
        <Button styled="filter" margin={10}></Button>
      </div>
      <div>
        <Button styled="filter on" margin={10}></Button>
      </div>
    </>
  );
}

export default App;
