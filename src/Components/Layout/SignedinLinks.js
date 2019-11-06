import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedinLinks = (props) => {
	return (
		<ul className="right">
			<li>
				<NavLink to="/create">New Post</NavLink>
			</li>
			<li>
				<a onClick={props.logOut} href="/">
					Log Out
				</a>
			</li>
			<li>
				<NavLink to="/" className="btn btn-floating blue darken-1">
					{props.initials}
				</NavLink>
			</li>
		</ul>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		logOut: () => dispatch(signOut())
	};
};

export default connect(null, mapDispatchToProps)(SignedinLinks);
