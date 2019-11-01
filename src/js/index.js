import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Main from './containers';
import ErrorBoundary from './hoc/ErrorBoundary';

const ROOT = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  </AppContainer>,
  ROOT
);
