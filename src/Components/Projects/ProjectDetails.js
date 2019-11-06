import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Spinner from '../Spinner/Spinner';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props) => {
	if (props.project) {
		if (props.isAuth.isLoaded && !props.isAuth.uid) {
			return <Redirect to="/signin" />;
		}
		return (
			<div className="container section project-details">
				<div className="card z-depth-0">
					<div className="card-content">
						<span className="card-title">{props.project.title}</span>
						<p>{props.project.content}</p>
					</div>
					<div className="card-action grey lighten-4 grey-text">
						<div>
							Posted by {props.project.authorFirstName} {props.project.authorLastName}
						</div>
						<div>{moment(props.project.createDate.toDate()).calendar()}</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <Spinner />;
	}
};

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	return {
		project: state.firestore.data.projects && state.firestore.data.projects[id],
		isAuth: state.firebase.auth
	};
};

export default compose(connect(mapStateToProps), firestoreConnect([ { collection: 'projects' } ]))(ProjectDetails);
