import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {getJWT} from "../connector.js"
import UserStore from '../stores/UserStore';



import Alert from 'react-bootstrap/Alert'

const Login = (props) =>{
    const [loginError, setloginError] = useState("");
    const [hash, setHash] = useState("");

    const history = useHistory(); // TODO remove?

    const handleSubmit = async (event) =>{
        event.preventDefault();

        getJWT(hash).then(res => {
            UserStore.isLoggedIn = true
            UserStore.jwt = res["token"]
        }).catch(err => {
            console.error(`login failed: ${JSON.stringify(err)}`)
            setloginError("Invalid Credentials!")
        })
    };



    function showPassword(){
        let x = document.getElementById("inputPassword");

        if(x.type === "password"){
            x.type = "text";
        } else{
            x.type = "password";
        }
    }

    return (
        <div className="login-page">
            <div className="modal-dialog text-center">
                <div className="col-sm-9 main-section">
                    <div className="modal-content">
                        <label>
                            <b>Please enter password to view this page:</b> 
                    </label>
                        <br />
                        {
                            loginError == "" ? null : <Alert variant='danger'>{loginError}</Alert>
                        }
                        <form id="login" onSubmit={handleSubmit}>

                            <div className="form-group2">
                                <input
                                    
                                    id="inputPassword"
                                    type="password"
                                    placeholder="Password"
                                    value={hash}
                                    onChange={event => setHash(event.target.value)}
                                />
                            </div>

                            <div>
                                <input type="checkbox" onChange={event => showPassword(event.target.value)} />
                                &nbsp;Show Password
                            </div>
                            <div>
                        <br />
                                <input className="button" type="submit" value="Submit" />
                                
                            </div>

                        </form>



                    </div>
                </div>
            </div>
        </div>

    );



};

export default Login;