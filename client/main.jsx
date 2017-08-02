
import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '../imports/ui/App.jsx';
import Login from '../imports/ui/Login.jsx';

FlowRouter.route('/', {
	action: function(params, queryParams) {
		mount(() => (<Login />));
	}
});

FlowRouter.route('/room/', {
	action: function(params, queryParams) {
		mount(() => (<App />));
	}
});
