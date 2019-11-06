import React, { Fragment } from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = (props) => {
	return (
		<Fragment>
			{props.posts &&
				props.posts.map((item) => (
					<Link to={'/project/' + item.id} key={item.id} {...props}>
						<ProjectSummary
							title={item.title}
							content={item.content}
							fName={item.authorFirstName}
							lName={item.authorLastName}
							createDate={item.createDate}
						/>
					</Link>
				))}
		</Fragment>
	);
};

export default ProjectList;
