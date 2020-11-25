import React from 'react';
import { Link } from "react-router-dom";
import logo from "../images/logo-blue.png";
import Frame from "../components/Frame";
// import Button from 
import {
  Navbar, NavlinkDropdown,
  NavlinkDropdownElement,Navlink, NavlinksList, Logo
} from 'react-easy-navbar'

class SideNav extends React.Component {
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
                  {/* <div className='header'>
                    <h3 className='title'>
                      Left header
                    </h3>
                  </div> */}
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
              {/* <div className='header'>
                  <h3 className={`
                      title
                      ${'left-' + leftOpen}
                  `}>
                      Main header
                  </h3>
              </div> */}
              <div className='content'>
              {/* <div style={{justifyContent: "flexEnd"}}>

                <Navbar
                  backgroundColor="#3949ab"
                  textColor="black"
                  style = {{display:"flex", justifyContent:"flex-end !important"}}
                >
                  <NavlinksList
                     
                  >
                    <Navlink text="Home" />
                    <Navlink text="Account" />
                    <Navlink text="Logout" />

                  </NavlinksList>
                </Navbar>
              </div> */}
                  <div style={{textAlign: "right", marginRight: "3%"}}>
                    <div style={{display: "inline-flex" , justifyContent: "space-around"}}>
                      <button style={{marginRight: "3%"}}>Home</button> <br/>
                      <button style={{marginRight: "3%"}}>Account</button> <br/>
                      <Link to="/logout">Logout</Link>
                    </div>
                  </div>
                  <div className="align">
                    <Frame data="frame full">
                      <p className="align"> </p>
                    </Frame>
                  </div>
                  <div className="align row">
                    <Frame data="frame even3">
                      <p className="align"></p>
                    </Frame>
                    <Frame data="frame even3">
                      <p className="align"></p>
                    </Frame>
                    <Frame data="frame even3">
                      <p className="align"></p>
                    </Frame>
                  </div>
                  <div className="align">
                    <Frame data="frame full">
                      <p className="align"> </p>
                    </Frame>
                  </div>

              </div>
          </div>

      </div>
    </div>
    );
  }
}

export default SideNav;