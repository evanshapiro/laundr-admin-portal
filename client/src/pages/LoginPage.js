import React from "react";
import UserStore from '../stores/UserStore';
import Login from '../components/Login';

const LoginPage = (props) => {

  if (UserStore.isLoggedIn) {
    // TODO redirect to dashboard ("/")
  }

  return (
    <Login />
  );

}

export default LoginPage;
