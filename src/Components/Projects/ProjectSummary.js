import React from 'react';
import moment from 'moment';

const ProjectSummary = (props) => {
	return (
		<div className="project-list">
			<div className="card   white project-summary section black-text" style={{ borderRadius: 5, padding: 10 }}>
				<span className="card-title">
					<h5 style={{ marginBottom: 20, marginTop: 0, marginLeft: 10, textAlign: 'center' }}>
						{props.title}
					</h5>
				</span>
				<p style={{ marginTop: 0, marginLeft: 10, padding: 10 }}>{props.content}</p>

				<p
					className="grey-text"
					style={{ marginTop: 0, padding: 10, marginLeft: 10, borderTop: '1px solid grey' }}
				>
					{props.fName} {props.lName}
					<br />
					{moment(props.createDate.toDate()).calendar()}
				</p>
			</div>
		</div>
	);
};

export default ProjectSummary;
