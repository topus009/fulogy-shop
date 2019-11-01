import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import Menu from '../components/Menu';

const Contacts = lazy(() => import('../pages/Contacts'));
const Home = lazy(() => import('../pages/Home'));

const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    {/* <Menu /> */}
    <Suspense fallback="Loading">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </Suspense>
  </Router>
);

export default AppRouter;
