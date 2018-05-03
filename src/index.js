import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, HashRouter, Route } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import createRouters from './routers';

const routes = createRouters();

const Root = () => (
  <Switch>
    {routes.map(route => <Route key={route.path} {...route} />)}
  </Switch>
);

ReactDOM.render(
  <HashRouter>
   <Root />
  </HashRouter>, document.getElementById('root'));
registerServiceWorker();