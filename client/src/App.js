import React, {useState, useEffect} from 'react';
import UserStore from './stores/UserStore';
import Login from './components/Login';
import UserTable from './components/UserTable';
import SubscriptionTable from './components/SubscriptionTable';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import axios from "axios";

const App = (props) => {
  
  // create logout function here

  return(
    <div className="app">
      <div className= "container">
        <UserTable />
        <SubscriptionTable />
      </div>
    </div>
  );
  
}

export default App;