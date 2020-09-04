import React from 'react';
import {Route, Switch} from 'react-router-dom';
import OrderList from "../components/OrderList/OrderList";
import Component from "../components/Component/Component";
import NoMatch from "../components/NoMatch/NoMatch";


const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' render={() => <OrderList/>} />
            <Route path='/component' render={() => <Component/>} />
            <Route render={() => <NoMatch/>} />
        </Switch>
    )
}

export default Routes;