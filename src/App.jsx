import { Routes, Route } from 'react-router-dom';
import SharedLayout from './shared/SharedLayout/SharedLayout';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/Main/MainPage';
import NewsPage from './pages/NewsPage/NewsPage';
import OurFriendsPage from './pages/OurFriendsPage/OurFriendsPage';
import NoticesPage from './pages/NoticesPage/NoticesPage';
import { PrivateRoute } from './router/PrivateRoute';
import { RestrictedRoute } from './router/RestrictedRoute';

function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <SharedLayout>
            <Route path="/main" element={<MainPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/notices" element={<NoticesPage />} />
            <Route path="/friends" element={<OurFriendsPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </SharedLayout>
        }
      />
    </Routes>
  );
}

export default App;
