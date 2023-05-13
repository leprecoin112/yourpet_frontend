import SharedLayout from './shared/SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import NewsPage from './pages/NewsPage/NewsPage';
import NoticesPage from './pages/NoticesPage/NoticesPage';
import OurFriendsPage from './pages/OurFriendsPage/OurFriendsPage';
function App() {
  return (
    <Routes>
      <Route 
        path="*"
        element={
          <SharedLayout>
            <Route path="/main" element={<Main />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/notices" element={<NoticesPage />} />
            <Route path="/friends" element={<OurFriendsPage />} />
             {/* <Route path="*" element={<NotFound />} /> */}
          </SharedLayout>
        }
      />
    </Routes>
  );
}

export default App;
