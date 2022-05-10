import React, { Component } from 'react';
import './App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Registration extends Component{
	constructor(props){
		super(props);	
		this.state = {
			firstName:null,
			lastName:null,
			email:null,
			phone:null,
			password:null
		}
	}
	render(){
		return (
			<div className="App">
				<TextField
					 autoFocus="true"
					 hintText="Enter your First Name"
		             floatingLabelText="First Name"
				/><br/>
				<TextField
					 hintText="Enter your Last Name"
		             floatingLabelText="Last Name"
				/><br/>
				<TextField
					 hintText="Enter your Email Id"
		             floatingLabelText="Email Id"
				/><br/>
				<TextField
					 value="+91"
					 hintText="Enter your Phone Number"
		             floatingLabelText="Phone Number"
				/>
				<br/>
				<TextField
					 type="password"
					 hintText="Enter your Password"
		             floatingLabelText="Password"
				/>
				<br/>
				<TextField
					 hintText="Enter your Confirm Password"
		             floatingLabelText="Confirm Password"
				/>
				<br/>
				<RaisedButton label="Register" primary={true}/>
			</div>);
	}
}
export default Registration;