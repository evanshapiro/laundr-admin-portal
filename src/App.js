import React from 'react';
import {observer} from 'mobx-react';
import UserStore from './stores/UserStore';
import LoginForm from './components/LoginForm';
import UserTable from './components/UserTable';
import SubscriptionTable from './components/SubscriptionTable';
import SubmitButton from './components/SubmitButton';
import './App.css';

class App extends React.Component {
  
  async componentDidMount(){
    if(process.env.REACT_APP_SKIP_LOGIN == "true"){
      UserStore.loading = false;
      UserStore.isLoggedIn = true;
    }else try{

      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json'
        }
      });

      let result = await res.json();

      if (result && result.success){
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        //UserStore.username = result.username;
      }

      else{
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    
    }

    catch(e){
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  } 
  // create logout function here

  render(){

    if(UserStore.loading){
      return (
        <div className="app">
          <div className= "container">
            Loading, please wait...  
          </div>
        </div>
      );
    }

    else{

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
      return (
        <div className="app">
          <div className='container'>
            <LoginForm />
          </div>
        </div>
      );
    }
  }
  
}

export default observer(App);
