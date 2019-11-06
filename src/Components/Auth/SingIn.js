import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import Spinner from '../Spinner/Spinner';
import { Redirect } from 'react-router-dom';

class SingIn extends Component {
	state = {
		email: '',
		password: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.signIn(this.state);
	};
	render() {
		if (!this.props.isAuth.isLoaded) {
			return <Spinner />;
		}
		if (this.props.isAuth.isLoaded && this.props.isAuth.uid) {
			return <Redirect to="/" />;
		}
		return (
			<div className="container z-depth-5">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3 center">Log In</h5>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>
					<div className="input-field center">
						<button className="btn pink lighten-1 z-depth-0">Login</button>
					</div>
					<p className="center red-text">{this.props.error}</p>
				</form>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		error: state.auth.authError,
		isAuth: state.firebase.auth
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: (credentials) => dispatch(signIn(credentials))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SingIn);
