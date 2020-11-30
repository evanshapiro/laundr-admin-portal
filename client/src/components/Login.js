import React, {useState} from 'react';
import {useHistory} from "react-router-dom";



import Alert from 'react-bootstrap/Alert'

const Login = (props) =>{
    const [loginError, setloginError] = useState("");
    const [hash, setHash] = useState("");

    const updateLogin = (value) =>
    {
        props.sendLogin(value);
    };

    const history = useHistory(); //

    const handleSubmit = async (event) =>{
        event.preventDefault();

        const fields = {password: hash};
        setloginError("Invalid Credentials!")
    };



    function showPassword(){
        let x = document.getElementById("inputPassword");

        if(x.type === "password"){
            x.type = "text";
        } else{ x.type = "password";
        }
    }

    return (

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

                        <label >
                            <input type="checkbox" onChange={event => showPassword(event.target.value)} />
                            &nbsp;Show Password
                        </label>
                        <div>
                    <br />
                            <input className="button" type="submit" value="Submit" />
                            
                        </div>

                    </form>



                </div>
            </div>
        </div>

    );



};

export default Login;