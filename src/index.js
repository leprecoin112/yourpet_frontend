import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import lightTheme from './shared/styled/theme/lightTheme';
import './shared/styled/styles.css';

import { Provider } from 'react-redux';
import store from './shared/redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
