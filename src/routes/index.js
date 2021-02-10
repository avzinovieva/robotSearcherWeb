import React from 'react';
import {Route, Switch} from 'react-router-dom';
import OrderList from '../components/OrderList/OrderList';
import Loading from '../components/Loading/Loading';
import Login from '../components/Login/Login';
import NoMatch from '../components/NoMatch/NoMatch';
import CategoriesList from '../components/CategoriesList/CategoriesList';
import MastersList from '../components/MastersList/MastersList';
import MastersRequestsTab
  from '../components/MastersRequestsTab/MastersRequestsTab';
import LandingCustomer from '../components/LandingCustomer/LandingCustomer';
import LandingMaster from "../components/LandingMaster/LandingMaster";

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' render={() => <Loading/>} />
      <Route path='/login' render={() => <Login/>} />
      <Route path='/orderList' render={() => <OrderList/>} />
      <Route path='/categories' render={() => <CategoriesList/>} />
      <Route path='/masters' render={() => <MastersList/>}/>
      <Route path='/mastersRequests' render={() => <MastersRequestsTab/>}/>
      <Route path='/landing' render={() => <LandingMaster/>}/>
      <Route path='/landing_customer' render={() => <LandingCustomer/>}/>
      <Route render={() => <NoMatch/>} />
    </Switch>
  );
};

export default Routes;
