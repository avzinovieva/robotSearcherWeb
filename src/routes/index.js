import React from 'react';
import {Route, Switch} from 'react-router-dom';
import OrderList from "../components/OrderList/OrderList";
import Loading from "../components/Loading/Loading";
import Login from "../components/Login/Login";
import NoMatch from "../components/NoMatch/NoMatch";

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' render={() => <Loading/>} />
            <Route path='/login' render={() => <Login/>} />
            <Route path='/orderList' render={() => <OrderList/>} />
            <Route render={() => <NoMatch/>} />
        </Switch>
    )
}

export default Routes;