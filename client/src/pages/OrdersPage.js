import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import OrderTable from '../components/OrderTable';
import logo from "../images/logo-blue.png";
import {Button} from "@material-ui/core"

class OrdersPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      leftOpen: true,
    }
  }
  
  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
  }
  
  render() {
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';

    return (
    <div >
     
      <div id='layout'>
      
          <div id='left' className={leftOpen} >
          
              <div className='icon'
                   onClick={this.toggleSidebar} >
                   &equiv;
              </div>
              <div className={`sidebar ${leftOpen}`} >
                  <div style={{paddingTop: 30, paddingLeft: 10}}>
                    <img src= {logo} alt="Laundr Logo" width="75%" height="50%"/>
                  </div>
                  <div className='content'>
                    <div className="sidenav">
                      <Link to="/">Dashboard</Link>
                      <Link to="/users">Users</Link>
                      <Link to="/orders">Orders</Link>
                      <Link to="/subscriptions">Subscriptions</Link>
                    </div>
                  </div>
              </div>
          </div>

          <div id='main'>
              <div className='content'>
                  <div style={{textAlign: "right", marginRight: "3%"}}>
                    <div style={{display: "inline-flex" , justifyContent: "space-around"}}>
                    <div>
                        <Button>
                          <Link to="/">
                            Home
                          </Link>
                        </Button>
                      </div>       
                      <br/>              
                       <div>
                        <Button>
                          <Link to="/account">
                            Account
                          </Link>
                        </Button>
                      </div>                        
                       <br/>
                      <div>
                        <Button>
                          <Link to="/logout">
                            Logout
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <OrderTable />
                  </div>
              </div>
          </div>

      </div>
    </div>
    );
  }
}

export default OrdersPage;
