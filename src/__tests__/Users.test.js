import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import Users from '../pages/Users';
import store from '../store';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  }),
  useRouteMatch: () => ({
    push: jest.fn()
  })
}));


describe('Users', () => {
  it('render Users without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReduxProvider store = {store}><Users/></ReduxProvider>, div);
  });       
});