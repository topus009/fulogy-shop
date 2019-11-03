import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from '../routes';
import configureStore from '../store';

export const Store = configureStore();

const Main = () => (
  <Provider store={Store}>
    <AppRouter />
  </Provider>
);

export default Main;
