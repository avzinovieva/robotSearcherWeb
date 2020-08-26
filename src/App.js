import React from 'react';
import './App.css';
import { setInitializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import OrderList from './components/OrderList/OrderList';

class App extends React.Component {

  componentDidMount() {
    this.props.setInitializeApp(true)
  }

  render () {
    console.log(this.props.initialized)
    return (
      // <div className="App">HEldlo World 1</div>
      <div className='app-wrapper'>
        <OrderList />
        <div className='app-wrapper-content'> 
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, {setInitializeApp})(App);
