import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
//import UserStore from 'client/src/stores/UserStore.js';

class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            password: '',
            buttonDisabled: false //reenable if entered wrong password
        }
    }

    setInputValue(property, val){
        val = val.trim();
        if (val.length > 12 ){
            return;
        }
        this.setState({
            [property]: val
        })
    }

    resetForm(){ //if user types in wrong credentials and needs to retype
        this.setState({
            password: '',
            buttonDisabled: false
        })

    }

    // async doLogin(){
        
    // }

    render(){
        return (
         <div className="loginForm">
             
           <p><b>This link is password protected </b>
           Please enter the password to continue
            </p>                     
            <InputField
                type='password'
                placeholder='Password'
                value={this.state.password ? this.state.password: ''}
                onChange={ (val) => this.setInputValue('password', val)}
             /> 

             <SubmitButton
                text='Submit'
                disabled={this.state.buttonDisabled}
                onClick={() => this.doLogin()}
             />

         </div>
         );
    }
}

export default LoginForm;
