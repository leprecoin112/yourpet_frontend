import SharedLayout from "./shared/SharedLayout/SharedLayout";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}></Route>
    </Routes>
  );
}

export default App;
