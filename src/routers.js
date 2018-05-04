import React from 'react';
import { Redirect } from 'react-router-dom';
import App from './App';
import Login from './containers/Login';
import NotMatch from './containers/NotMatch';

export default () => [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/app" />
  },
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/app',
    component: App
  },
  {
    component: NotMatch,
  }
]