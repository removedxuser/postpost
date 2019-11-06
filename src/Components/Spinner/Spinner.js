import React, { Fragment } from 'react';
import classes from './Spinner.module.css';

const spinner = () => (
	<Fragment>
		<div className={classes.Loader}>Loading...</div>
		<br />
		<p style={{ color: 'black', textAlign: 'center', fontFamily: 'Courier New' }}>
			<b>Loading...</b>
		</p>
	</Fragment>
);

export default spinner;
