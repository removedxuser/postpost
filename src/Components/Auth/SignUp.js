import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
	state = {
		email: '',
		password: '',
		firstName: '',
		lastName: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		this.props.signUp(this.state);
	};
	render() {
		if (!this.props.isAuth.isLoaded) {
			return <Spinner />;
		}
		if (this.props.isAuth.isLoaded && this.props.isAuth.uid) {
			return <Redirect to="/" />;
		}
		let errMsg = null;
		if (this.props.error) {
			errMsg = this.props.error;
		}
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3 center">Sign Up</h5>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange} required />
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange} required />
					</div>
					<div className="input-field">
						<label htmlFor="firstname">First Name</label>
						<input type="text" id="firstName" onChange={this.handleChange} required />
					</div>
					<div className="input-field">
						<label htmlFor="lastname">Last Name</label>
						<input type="text" id="lastName" onChange={this.handleChange} required />
					</div>
					<div className="input-field center">
						<button className="btn pink lighten-1 z-depth-0">Sign Up</button>
					</div>
					<div className="red-text center">{errMsg}</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.firebase.auth,
		error: state.auth.signUpError
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signUp: (newUser) => dispatch(signUp(newUser))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
