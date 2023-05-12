import SharedLayout from './shared/SharedLayout/SharedLayout';
import RegisterPage from './pages/RegisterPage';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}></Route>
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
