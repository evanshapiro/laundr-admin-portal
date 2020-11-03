import React from 'react'
import MaterialTable from 'material-table'
import { getUserData } from '../connector'

const StatusEnum = Object.freeze({loading: 1, error: 2, loaded: 3})

class UserTable extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      users: null,
      status: StatusEnum.loading
    }
  }
  
  async componentDidMount(){
    getUserData()
      .then(res => {
        this.setState({
          users: res,
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
        <h2>Loading the user table...</h2>
      )
    }else if(this.state.status === StatusEnum.error){
      return (
        <h2>There was an error loading the user table</h2>
      )
    }else{
      return (
        <div className="table">
          <MaterialTable
            columns={[
              { title: 'Username', field: 'username'},
              { title: 'Email', field: 'email'},
              { title: 'Account Creation Date', field: 'createdDate', type: 'datetime'}
            ]}
            data={ this.state.users }
            title="Users"
            options={{
              draggable: false,
              pageSizeOptions: (this.state.users.length < 10) ? [] : [10, 25, 50, 100],
              pageSize: Math.min(this.state.users.length,25),
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

export default UserTable;