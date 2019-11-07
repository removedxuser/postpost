import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedinLinks = (props) => {
	return (
		<ul className="right">
			<li>
				<NavLink to="/create">
					<b>New Post</b>
				</NavLink>
			</li>
			<li>
				<b>
					<a onClick={props.logOut} href="/">
						Log Out
					</a>
				</b>
			</li>
			<li>
				<NavLink to="/" className="btn btn-floating blue darken-1">
					<b>{props.initials}</b>
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
