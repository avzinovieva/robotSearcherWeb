import React from 'react';
import './App.module.scss';
import Routes from './routes';

// eslint-disable-next-line require-jsdoc
class App extends React.Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <div className='app-wrapper'>
        <Routes />
        <div className='app-wrapper-content'>
        </div>
      </div>
    );
  }
}
 
export default App;

