import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
	return (
		<div
			className="card green lighten-4 project-summary section black-text"
			style={{ borderRadius: 5, padding: 10 }}
		>
			<span className="card-title">
				<h5 style={{ marginBottom: 20, marginTop: 0, marginLeft: 10, textAlign: 'center' }}>Notifications</h5>
			</span>
			<ul>
				{props.notifications &&
					props.notifications.map((item) => (
						<li key={item.id}>
							<span className="pink-text">
								<b>{item.user}-</b>
							</span>
							<span className="blue-text">{item.content}</span>
							<div className="grey-text">{moment(item.time.toDate()).fromNow()}</div>
							<br />
						</li>
					))}
			</ul>
		</div>
	);
};

export default Notifications;
