import React from 'react';
import Dashboard from './pages/Dashboard';

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
