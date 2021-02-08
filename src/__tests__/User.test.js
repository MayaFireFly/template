import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import User from '../pages/User';
import store from '../store';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  }),
  useRouteMatch: () => ({
    push: jest.fn()
  })
}));


describe('User', () => {
  it('render User without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReduxProvider store = {store}><User/></ReduxProvider>, div);
  });       
});