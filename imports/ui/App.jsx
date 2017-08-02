
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';

// App component - represents the whole app
class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			room_name: 'Default',
			user_name: Session.get('user_name')
		};
	}	
	
	handleTalk(event) {
		event.preventDefault();
		alert('Hi guys!.');
	}
	
	render() {
		return (
			<div className="room">
				<header>
					<h3 className="room-name">{ this.state.room_name + ' - ' + this.state.user_name }</h3>
					<h3  className="room-title">HEEBO.CHAT</h3>
				</header>
				<section className="chat-body"></section>
				<aside className="list-of-chats"></aside>
				<footer>
					<input type="text" ref="textInput" placeholder="Type here..."/>
					<input type="button" value="TALK!" onClick={ this.handleTalk.bind(this) }/>
				</footer>
			</div>
		);
	}
}

export default createContainer(() => { return {};}, App);