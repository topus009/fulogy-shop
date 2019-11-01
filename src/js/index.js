import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Main from './containers';

const ROOT = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <Main />
  </AppContainer>,
  ROOT
);
