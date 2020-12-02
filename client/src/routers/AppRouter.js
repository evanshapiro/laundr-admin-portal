import React from "react";
import AccountPage from "../pages/AccountPage";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import OrdersPage from "../pages/OrdersPage";
import SubscriptionsPage from "../pages/SubscriptionsPage";
import UsersPage from "../pages/UsersPage";
import NotFoundPage from "../pages/NotFoundPage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import UserStore from '../stores/UserStore';
import { observer } from "mobx-react";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/login" component={LoginPage}/>
        {!UserStore.isLoggedIn ? <Redirect to="/login" /> : null}
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/account" component={AccountPage}/>
        <Route path="/orders" component={OrdersPage} />
        <Route path="/subscriptions" component={SubscriptionsPage} />
        <Route path="/users" component={UsersPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default observer(AppRouter);
