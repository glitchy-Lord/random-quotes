import React from 'react';
import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
	return (
		<div className={classes['place-spinner']}>
			<div className={classes['ring-spinner']}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default LoadingSpinner;
