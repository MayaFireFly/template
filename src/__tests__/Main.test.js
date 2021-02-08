import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import Main from '../pages/Main';
import store from '../store';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  }),
  useRouteMatch: () => ({
    push: jest.fn()
  })
}));


describe('Main', () => {
  it('render Main without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReduxProvider store = {store}><Main/></ReduxProvider>, div);
  });       
});