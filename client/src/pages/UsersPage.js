import React from 'react';
import UsersContent from '../components/UsersContent';
import Navigation from '../components/Navigation';

class UsersPage extends React.Component {
  render(){
    return (
      <div>
        <Navigation>
          <UsersContent />
        </Navigation>
      </div>
    );
  }
}

export default UsersPage;