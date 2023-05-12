import SharedLayout from './shared/SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}></Route>
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default App;
