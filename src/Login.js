import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './App.css';

class Login extends Component{

	constructor(props){
	  super(props);
	  this.state={
		  	username:'',
		  	password:'',
		  	loginStatus:null
		  }
	  this.clientSDK = props.sdkObject;
	}

	handleClick(event){
		if(this.state.username.length<=3 && this.state.password.length<=3) return;
		this.clientSDK.doLogin("defaultLogin",{
			"userid":this.state.username,
			"password":this.state.password,
		},this.loginSuccessHandler.bind(this),this.loginFailureHandler.bind(this));
	}
	loginSuccessHandler(response){
		//console.log("login success handler"+JSON.stringify(response));
		this.setState({loginStatus:true});
	}
	loginFailureHandler(error){
		//console.log("login failure handler"+JSON.stringify(error));
		this.setState({loginStatus:false});
	}
	render(){
		const isLoginSuccess = this.state.loginStatus;
		const message = (isLoginSuccess===true) ? (<div>Login Success !!</div>) :  (isLoginSuccess===false) ?(<div> Login Failed!!!!</div>):(<div></div>);
		return(
			<div className="App">			
				<TextField
					 autoFocus="true"
		             hintText="Enter your Username"
		             floatingLabelText="Username"
		             onChange = {(event,newValue) => this.setState({username:newValue})}
		        />
		        <br/>
	            <TextField
	               type="password"
	               hintText="Enter your Password"
	               floatingLabelText="Password"
	               onChange = {(event,newValue) => this.setState({password:newValue})}
	            />
	            <br/>
     			<RaisedButton label="Submit" primary={true} onClick={(event) => this.handleClick(event)}/>
					
				{message}
			</div>
			);
	}
}

export default Login;