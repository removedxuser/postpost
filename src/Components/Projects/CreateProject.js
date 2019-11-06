import React, { Component } from 'react';
import { createProject } from '../../store/actions/projects';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

class CreateProject extends Component {
	state = {
		title: '',
		content: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createProject(this.state);
		this.props.history.push('/');
	};

	render() {
		if (!this.props.isAuth.isLoaded) {
			return <Spinner />;
		}
		if (this.props.isAuth.isLoaded && !this.props.isAuth.uid) {
			return <Redirect to="/" />;
		}
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white z-depth-5">
					<h5 className="grey-text text-darken-3 center">Create Project</h5>
					<div className="input-field">
						<label htmlFor="title">Project Title</label>
						<input type="text" id="title" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="content">Project Content</label>
						<textarea className="materialize-textarea" id="content" onChange={this.handleChange} />
					</div>
					<div className="input-field center">
						<button className="btn pink lighten-1 z-depth-0">Create</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.firebase.auth
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		createProject: (project) => dispatch(createProject(project))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
