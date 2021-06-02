/* eslint-disable require-jsdoc */
import React from 'react';
import './App.module.scss';
import Routes from './routes';

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Routes />
        <div className="app-wrapper-content" />
      </div>
    );
  }
}

export default App;
