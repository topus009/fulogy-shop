import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyle, { theme } from './styles';
import Header from '../components/Header';

const Home = lazy(() => import('../pages/Home'));

const history = createBrowserHistory();

const AppRouter = () => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <GlobalStyle />
      <Header />
      <Suspense fallback="Loading">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  </ThemeProvider>
);

export default AppRouter;
