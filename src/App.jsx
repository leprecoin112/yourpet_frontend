import SharedLayout from './shared/SharedLayout/SharedLayout';
import RegisterPage from './pages/RegisterPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/register" element={<RegisterPage />} />
         <Route path="/main" element={<Main />} />
         <Route path="/news" element={<NewsPage />} />
         <Route path="/notices" element={<NoticesPage />} />
         <Route path="/friends" element={<OurFriendsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
