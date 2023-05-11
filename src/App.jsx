import SharedLayout from './shared/SharedLayout/SharedLayout';
import { PrivateRoute } from './router/PrivateRoute';
import { RestrictedRoute } from './router/RestrictedRoute';
import { Routes, Route } from 'react-router-dom';
import AuthNav from './shared/components/AuthNav/AuthNav';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}></Route>
      <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/"
              /*component={<RegisterPage />}*/
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/"
              /*component={<AuthNav />}*/
            />
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/login" /*component={}*/ />
          }
        />
    </Routes>
  );
}

export default App;
