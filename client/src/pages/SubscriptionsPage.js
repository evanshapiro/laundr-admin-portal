import React from 'react';
import Navigation from '../components/Navigation';
import SubscriptionContent from '../components/SubscriptionContent';

class SubscriptionsPage extends React.Component {
  render(){
    return (
      <div>
        <Navigation>
          <SubscriptionContent />
        </Navigation>
      </div>
    );
  }
}

export default SubscriptionsPage;