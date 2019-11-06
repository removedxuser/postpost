import React from 'react';
import { Link } from 'react-router-dom';
import SignedinLinks from './SignedinLinks';
import SignedoutLinks from './SignedoutLinks';
import { connect } from 'react-redux';
import { useSpring, animated } from 'react-spring';

const Navbar = (props) => {
	const pros = useSpring({ opacity: 1, from: { opacity: 0 } });
	return (
		<animated.div style={pros}>
			<div className="navbar-fixed" style={{ marginBottom: 30, fontFamily: 'Special Elite, cursive' }}>
				<nav className="nav-wrapper">
					<div className="container">
						<Link to="/" className="brand-logo black-text">
							PostPostMAN
						</Link>
						{props.isAuth.isLoaded &&
							(props.isAuth.uid ? <SignedinLinks initials={props.initials} /> : <SignedoutLinks />)}
					</div>
				</nav>
			</div>
		</animated.div>
	);
};

const mapStateToProps = (state) => {
	return {
		isAuth: state.firebase.auth,
		initials: state.firebase.profile.initials
	};
};

export default connect(mapStateToProps)(Navbar);
