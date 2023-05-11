import SharedLayout from './shared/SharedLayout/SharedLayout';
import MainPage from './pages/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}></Route>
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default App;
