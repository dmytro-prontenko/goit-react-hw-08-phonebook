import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from 'redux/store';
import { persistor } from 'redux/store.js';
import App from './components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
    <ThemeProvider theme={theme}>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
      {/* <Global /> */}
    </ThemeProvider>
    </BrowserRouter>
    <ToastContainer autoClose={1000}/>
  </>
);
