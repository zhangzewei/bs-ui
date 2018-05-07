import React from 'react';
import { Redirect } from 'react-router-dom';
import App from './App';
import Login from './containers/Login';
import Register from './containers/Login/register';
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
    path: '/register',
    exact: true,
    component: Register
  },
  {
    path: '/app',
    component: App
  },
  {
    component: NotMatch,
  }
]