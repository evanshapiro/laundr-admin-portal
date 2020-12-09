import React from 'react'
import MaterialTable from 'material-table'
import { getSubscriptionData } from '../connector'

const StatusEnum = Object.freeze({loading: 1, error: 2, loaded: 3})

class SubscriptionTable extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      subscriptions: null,
      status: StatusEnum.loading
    }
  }
  
  async componentDidMount(){
    getSubscriptionData()
      .then(res => {
        this.setState({
          subscriptions: res,
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
        <h2>Loading the subscription table...</h2>
      )
    }else if(this.state.status === StatusEnum.error){
      return (
        <h2>There was an error loading the subscription table</h2>
      )
    }else{
      return (
        <div className="table">
          <MaterialTable
            columns={[
              { title: 'Customer Name', field: 'customerName'},
              { title: 'Subscription Type', field: 'subscriptionType'},
              { title: 'Start Date', field: 'startDate', type: 'datetime'},
              { title: 'Renewal Date', field: 'renewalDate', type: 'datetime'},
              { title: 'Maximum Weight', field: 'maximumWeight'},
              { title: 'Current Weight', field: 'currentWeight'},
              { title: 'Subscription Status', field: 'subscriptionStatus'}
            ]}
            data={ this.state.subscriptions }
            title="Subscriptions"
            options={{
              draggable: false,
              pageSizeOptions: (this.state.subscriptions.length < 10) ? [] : [10, 25, 50, 100],
              pageSize: Math.min(this.state.subscriptions.length,25),
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

export default SubscriptionTable;
