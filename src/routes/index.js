import React from 'react';
import { Route, Switch } from 'react-router-dom';
import OrderList from '../components/OrderList/OrderList';
import Loading from '../components/Loading/Loading';
import Login from '../components/Login/Login';
import NoMatch from '../components/NoMatch/NoMatch';
import CategoriesList from '../components/CategoriesList/CategoriesList';
import MastersList from '../components/MastersList/MastersList';
import MastersRequestsTab
  from '../components/MastersRequestsTab/MastersRequestsTab';
import LandingCustomer from '../components/LandingCustomer/LandingCustomer';
import LandingMaster from '../components/LandingMaster/LandingMaster';
import Landing from '../components/Landing/Landing';
import CouponActivation from '../components/CuponActivation';
import WorkTypesDetails from '../components/WorkTypesDetails/WorkTypesDetails';
import CategoriesPrice from '../components/CategoriesPrice/CategoriesPrice';

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <Loading />} />
    <Route path="/login" render={() => <Login />} />
    <Route path="/orderList" render={() => <OrderList />} />
    <Route path="/categories" render={() => <CategoriesList />} />
    <Route path="/categoriesPrice" render={() => <CategoriesPrice />} />
    <Route path="/masters" render={() => <MastersList />} />
    <Route path="/mastersRequests" render={() => <MastersRequestsTab />} />
    <Route path="/landing" render={() => <LandingMaster />} />
    <Route path="/landing_customer" render={() => <LandingCustomer />} />
    <Route path="/r" render={() => <CouponActivation />} />
    <Route path="/landing" render={() => <Landing />} />
    <Route path="/workTypesDetails" render={() => <WorkTypesDetails />} />
    <Route render={() => <NoMatch />} />
  </Switch>
);

export default Routes;
