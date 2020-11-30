import React from 'react';
import OrderTable from '../components/OrderTable';
import Navigation from '../components/Navigation';

class OrdersPage extends React.Component {
  render(){
    return (
      <div>
        <Navigation>
          <OrderTable />
        </Navigation>
      </div>
    );
  }
}

export default OrdersPage;
