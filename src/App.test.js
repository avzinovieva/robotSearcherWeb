import React from 'react';
import {create} from 'react-test-renderer';
import logo from './logo.svg';
import App from './App';
import index from './state/modules';
import { Provider } from 'react-redux';

test('App matches his snapshot', () => {
  const component = create(<Provider store={index}>
    <App />
  </Provider>);
  const tree = component.toJSON();
  // 2. expectation
  expect(tree).toMatchSnapshot();
});
