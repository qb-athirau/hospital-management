import React from 'react';
import AppRouter from './routes';
import Toast from '../src/components/Toast';
import { ThemeProvider } from 'styled-components';
import colorThemes from './configs/styles/colorThemes';
import { Provider } from 'react-redux';
import appStore from './store';
import { UserProvider } from './context/UserContext';

// Initialize store
//const store = appStore();

const App = () => (
  <Provider store={appStore}>
    <UserProvider>
      <ThemeProvider theme={colorThemes}>
        <Toast />
        <AppRouter />
      </ThemeProvider>
    </UserProvider>
  </Provider>
);

export default App;
