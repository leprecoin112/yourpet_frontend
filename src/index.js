import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import lightTheme from './shared/styled/theme/lightTheme';
import './shared/styled/styles.css';
import { Provider } from 'react-redux';
import { store, persistor } from './shared/redux/store';
import { NoticeModal } from './shared/components/NoticeModal/NoticeModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Global } from '@emotion/react';

// const globalStyles = css`
//   html {
//     overflow: hidden;
//   }
// `;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Global />
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
