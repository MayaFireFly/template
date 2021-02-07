import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import Albums from '../pages/Albums';
import store from '../store';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  }),
  useRouteMatch: () => ({
    push: jest.fn()
  })
}));


describe('Albums', () => {
  it('render Albums without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReduxProvider store = {store}><Albums/></ReduxProvider>, div);
  });       
});