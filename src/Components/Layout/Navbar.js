import React from 'react';
import { Link } from 'react-router-dom';
import SignedinLinks from './SignedinLinks';
import SignedoutLinks from './SignedoutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
	return (
		<div className="navbar-fixed" style={{ marginBottom: 30 }}>
			<nav className="nav-wrapper blue darken-3">
				<div className="container">
					<Link to="/" className="brand-logo">
						PostPostMAN
					</Link>
					{props.isAuth.isLoaded &&
						(props.isAuth.uid ? <SignedinLinks initials={props.initials} /> : <SignedoutLinks />)}
				</div>
			</nav>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isAuth: state.firebase.auth,
		initials: state.firebase.profile.initials
	};
};

export default connect(mapStateToProps)(Navbar);
