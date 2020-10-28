import React from 'react'
import MaterialTable from 'material-table'

class UserTable extends React.Component {
  render() {
    return (
      <div class="table">
        <MaterialTable
          columns={[
            { title: 'Username', field: 'username'},
            { title: 'Email', field: 'email'},
            { title: 'Account Creation Date', field: 'createdDate', type: 'datetime'}
          ]}
          data={ this.props.data }
          title="Users"
          options={{
            draggable: false,
            pageSizeOptions: [10, 25, 50, 100],
            pageSize: 25,
            rowStyle: {
              backgroundColor: '#F9F9F9',
            }
          }}
        />
      </div>
    )
  }
}

export default UserTable;