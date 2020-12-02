import React from "react";
import UserStore from '../stores/UserStore';
import Login from '../components/Login';
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";

const LoginPage = (props) => {
  if (UserStore.isLoggedIn) {
    return (
      <Redirect to="/" />
    )
  }else{
    return (
      <Login />
    )
  }
}

export default observer(LoginPage);
