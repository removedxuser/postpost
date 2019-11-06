import React from 'react';
import moment from 'moment';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [ -(y - window.innerHeight / 1.8) / 20, (x - window.innerWidth / 3) / 20, 1.05 ];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ProjectSummary = (props) => {
	const [ pros, set ] = useSpring(() => ({ xys: [ 0, 0, 1 ], config: { mass: 10, tension: 450, friction: 25 } }));
	const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
	return (
		<animated.div style={fade}>
			<animated.div
				className="card-panel teal  black-text z-depth-5"
				onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
				onMouseLeave={() => set({ xys: [ 0, 0, 1 ] })}
				style={{ transform: pros.xys.interpolate(trans), border: '2px solid white' }}
			>
				<div>
					<span className="card-title white-text">
						<h5
							style={{
								textAlign: 'center',
								position: 'fixed',
								top: '30%',
								left: '50%',
								transform: 'translate(-50%, -50%)'
							}}
						>
							{props.title} <p style={{ fontSize: 14, color: 'lightgrey' }}>Click to view</p>
						</h5>
					</span>
					<div className="card-content">
						<p className="white-text" style={{ position: 'fixed', bottom: '5%' }}>
							{props.fName} {props.lName}
							<br />
							{moment(props.createDate.toDate()).calendar()}
						</p>
					</div>
				</div>
			</animated.div>
		</animated.div>
	);
};

export default ProjectSummary;
