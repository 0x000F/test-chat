import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	handleSubmit(event) {
		event.preventDefault();

		const name = ReactDOM.findDOMNode(this.refs.userName).value.trim();
		if(name != '') {
			Session.set('user_name', name);
			window.location.href = '/room';
		}
		else {
			alert('Type your name first.');
		}
	}

	render() {
		return (
			<div className="login">
				<form className="" onSubmit={this.handleSubmit.bind(this)} >
					<p className="title">HEEBO.CHAT</p>
					<input type="text" ref="userName" placeholder="Username"/>
					<input type="submit" value="Chat now !"/>
				</form>
			</div>
		);
	}
}

export default createContainer(() => { return {}; }, Login);