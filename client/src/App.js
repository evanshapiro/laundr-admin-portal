import React, {useState, useEffect} from 'react';
import UserStore from './stores/UserStore';
import Login from './components/Login';
import UserTable from './components/UserTable';
import SubscriptionTable from './components/SubscriptionTable';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import axios from "axios";

const App = (props) => {
  const [userProps, setUserProps] = useState("");
  const [loginState, setLoginState] = useState(false);
  
  
    if(process.env.REACT_APP_SKIP_LOGIN == "true"){
      //UserStore.isLoggedIn = true;
      setLoginState(true);
    }

    const loginStateUpdate = (value) =>{
        setLoginState(value);
    };
  
    if(UserStore.isLoggedIn){
      return (
        <div className="app">
          <div className= "container">
            <UserTable />
            <SubscriptionTable />
          </div>
        </div>
      );
    }
    
  // create logout function here

  return(
    <Container>
            <Router>
                <Switch>
                    <Route
                        exact path="/"
                        render={(props) => (
                            <Login {...props} sendLogin={loginStateUpdate} />
                        )}
                    />   
                </Switch>
            </Router>
        </Container>
  );
  
}

export default App;