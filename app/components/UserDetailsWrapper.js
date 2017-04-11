 var React = require('react');
var UserDetails = require('./UserDetails');

function UserDetailsWrapper (props) {
	return (
		<div className="col-sm-6">
			<p className="lead">{props.header}</p>
			{props.children}
		</div>
	)
}

module.exports = UserDetailsWrapper;