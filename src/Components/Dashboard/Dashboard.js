import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../Projects/ProjectList';
import { connect } from 'react-redux';
//import projectReducer from '../../store/reducers/projectReducer';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
	render() {
		if (this.props.isAuth.isLoaded && !this.props.isAuth.uid) {
			return <Redirect to="signin" />;
		}
		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
						<ProjectList posts={this.props.posts} />
					</div>
					<div className="col s12 m5 offset-m1">
						<Notifications />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.firestore.ordered.projects,
		isAuth: state.firebase.auth
	};
};

export default compose(connect(mapStateToProps), firestoreConnect([ { collection: 'projects' } ]))(Dashboard);
