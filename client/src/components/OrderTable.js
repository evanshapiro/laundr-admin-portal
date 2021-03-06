import React from 'react'
import MaterialTable from 'material-table'
import { getOrderData } from '../connector'

const StatusEnum = Object.freeze({loading: 1, error: 2, loaded: 3})

class OrderTable extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      Orders: null,
      status: StatusEnum.loading
    }
  }
  
  async componentDidMount(){
    getOrderData()
      .then(res => {
        this.setState({
          orders: res,
          status: StatusEnum.loaded
        })
      }).catch(err => {
        console.error(err)
        this.setState({
          status: StatusEnum.error
        })
      })
  } 

  render() {
    if(this.state.status === StatusEnum.loading){
      return (
        <h2>Loading the order table...</h2>
      )
    }else if(this.state.status === StatusEnum.error){
      return (
        <h2>There was an error loading the order table</h2>
      )
    }else{
      return (
        <div className="table">
          <MaterialTable
            columns={[
              { title: 'Order Number', field: 'orderNumber'},
              { title: 'Customer Name', field: 'customerName'},
              { title: 'Pickup Time', field: 'pickupTime', type: 'datetime'},
              { title: 'Delivery Time', field: 'deliveryTime', type: 'datetime'},
              { title: 'Driver Name', field: 'driverName'},
              { title: 'Customer Address', field: 'customerAddress'},
              { title: 'Order Status', field: 'orderStatus'},
              { title: 'Order Weight', field: 'orderWeight'}
            ]}
            data={ this.state.orders }
            title="Orders"
            options={{
              draggable: false,
              pageSizeOptions: (this.state.orders.length < 10) ? [] : [10, 25, 50, 100],
              pageSize: Math.min(this.state.orders.length,25),
              rowStyle: {
                backgroundColor: '#F9F9F9',
              }
            }}
          />
        </div>
      )
    }
  }
}

export default OrderTable;
