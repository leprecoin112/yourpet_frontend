import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './router/SharedLayout/SharedLayout';
import { PrivateRoute } from './router/PrivateRoute';
import { RestrictedRoute } from './router/RestrictedRoute';
import { RedirectRoute } from './router/RedirectRoute';

const AddPetPage = lazy(() => import('./pages/AddPetPage/AddPetPage'));

const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const MainPage = lazy(() => import('./pages/MainPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const OurFriendsPage = lazy(() =>
  import('./pages/OurFriendsPage/OurFriendsPage')
);
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <SharedLayout>
            <Route path="/" element={<RedirectRoute redirectTo="/main" />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/notices" element={<NoticesPage />} />
            <Route path="/friends" element={<OurFriendsPage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/user"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
              }
            />
            <Route
              path="/user"
              element={
                <PrivateRoute redirectTo="/login" component={<UserPage />} />
              }
            />
            <Route
              path="/add-pet"
              element={
                <PrivateRoute redirectTo="/login" component={<AddPetPage />} />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </SharedLayout>
        }
      />
    </Routes>
  );
}

export default App;
