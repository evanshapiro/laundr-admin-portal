import React from 'react';
import DashboardContent from '../components/DashboardContent';
import Navigation from '../components/Navigation';

class Dashboard extends React.Component {
  render(){
    return (
      <div>
        <Navigation>
          <DashboardContent />
        </Navigation>
      </div>
    );
  }
}

export default Dashboard;
