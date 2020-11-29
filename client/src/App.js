import React, {useState, useEffect} from 'react';
import UserStore from './stores/UserStore';
import Login from './components/Login';
import UserTable from './components/UserTable';
import SubscriptionTable from './components/SubscriptionTable';
import OrderTable from './components/OrderTable';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import axios from "axios";
import Dashboard from './pages/Dashboard';
import LoginForm from "./components/LoginForm"

const App = (props) => {
  
  // create logout function here
  //  <UserTable />
  //<SubscriptionTable />
  //<OrderTable />
  
  return(
    <div className="app">
      <div className= "container">
        <Dashboard/>  
      </div>
    </div>
  );

}

export default App;
