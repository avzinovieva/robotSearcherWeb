import React from 'react';
import {create} from 'react-test-renderer';
import logo from './logo.svg';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

test('App matches his snapshot', () => {
  // 1. initial data
  const component = create(<Provider store={store}>
    <App />
  </Provider>);
  const tree = component.toJSON();
  // 2. expectation
  expect(tree).toMatchSnapshot();
});
