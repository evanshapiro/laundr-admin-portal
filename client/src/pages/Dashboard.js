import React from "react";
import SubscriptionsGraph from "../components/graphs/SubscriptionsGraph";
import Glance from "../components/Glance";
import OrdersGraph from "../components/graphs/OrdersGraph";
import PoundsGraph from "../components/graphs/PoundsGraph";
import Navigation from "../components/Navigation";

/*
  TODO:
  - Make graphs responsive (me)
  - Add rest of graph tabs
  - Add tables to users, orders, and subs page
  - Add real data
  - Create Account page
  - Make sure log in and log out work
*/

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Navigation>
          <div>
            <SubscriptionsGraph />
            <Glance />
            <OrdersGraph />
            <PoundsGraph />
          </div>
        </Navigation>
      </div>
    );
  }
}

export default Dashboard;
