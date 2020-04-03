import React from "react";
import { Route, Switch } from "react-router-dom";

import Auth from '../containers/Auth/Auth';
import Home from "../containers/Home/Home";
import Search from "../containers/Search/Search";
import PurchaseHistory from "../containers/PurchaseHistory/PurchaseHistory";

const Routes = () => {
    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/profile" component={PurchaseHistory} />
            <Route exact path="/" component={Auth} />
        </Switch>
    );
}

export default Routes;