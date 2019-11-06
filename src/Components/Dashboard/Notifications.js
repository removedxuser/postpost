import React from 'react';
import moment from 'moment';
import { useSpring, animated } from 'react-spring';

const Notifications = (props) => {
	const pros = useSpring({ opacity: 1, from: { opacity: 0 } });
	return (
		<animated.div style={pros}>
			<div
				className="card green lighten-4 project-summary section black-text z-depth-5"
				style={{ borderRadius: 5, padding: 10, fontFamily: 'Special Elite, cursive' }}
			>
				<span className="card-title">
					<br />
					<h5
						style={{
							marginBottom: 20,
							marginTop: 0,
							marginLeft: 10,
							textAlign: 'center'
						}}
					>
						Notifications
					</h5>
					<hr />
				</span>
				<ul
					style={{
						fontFamily: 'Staatliches, cursive',
						fontSize: '14px',
						letterSpacing: 2,
						marginLeft: '20px'
					}}
				>
					{props.notifications &&
						props.notifications.map((item) => (
							<li key={item.id}>
								<span className="pink-text">
									<b>{item.user} - </b>
								</span>
								<span className="blue-text">{item.content}</span>
								<div className="grey-text">{moment(item.time.toDate()).fromNow()}</div>
								<br />
							</li>
						))}
				</ul>
			</div>
		</animated.div>
	);
};

export default Notifications;
