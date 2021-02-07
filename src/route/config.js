import { routes } from '../constants';

import About from '../pages/About';
import Main from '../pages/Main';

import Albums from '../pages/Albums';
import Album from '../pages/Album';

import Users from '../pages/Users';
import User from '../pages/User';


export const configRoutes = [
  {
    path: routes.base,
    exact: true,
    component: Main
  },
  {
    path: routes.main,
    exact: true,
    component: Main
  },
  {
    path: routes.about,
    exact: true,
    component: About
  },
  {
    path: routes.albums.base,
    exact: true,
    component: Albums
  },
  {
    path: routes.albums.view,
    exact: true,
    component: Album
  },  
  {
    path: routes.users.base,
    exact: true,
    component: Users
  },
  {
    path: routes.users.view,
    exact: true,
    component: User
  }
];