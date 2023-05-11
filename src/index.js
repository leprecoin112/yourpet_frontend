import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import lightTheme from './shared/styled/theme/lightTheme';
import AuthNav from './shared/components/AuthNav/AuthNav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
    <ThemeProvider theme={lightTheme}>
      <App />
      <AuthNav/>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
