import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import classes from './Quotes.module.css';

const Quotes = () => {
	const [quotes, setQuotes] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const getQuotes = async () => {
		setIsLoading(true);
		try {
			const response = await fetch('https://type.fit/api/quotes');
			const data = await response.json();
			const randQuote = Math.floor(Math.random() * data.length);
			setQuotes(data[randQuote]);
		} catch (error) {
			console.error(error);
			setIsLoading(true);
		}
		setIsLoading(false);
	};
	useEffect(() => {
		getQuotes();
	}, []);

	// console.log(quotes);

	if (!quotes.text) {
		return (
			<div className={classes.card}>
				<h1>no quotes available</h1>
				<button onClick={getQuotes}>Get new quote</button>
			</div>
		);
	}

	return isLoading ? (
		<div className={classes.card}>
			<LoadingSpinner />
		</div>
	) : (
		<div className={classes.card}>
			<div>
				<p className={classes.text}>{quotes.text}</p>
				<p className={classes.author}>- {quotes.author}</p>
			</div>
			<button onClick={getQuotes}>Get new quote</button>
		</div>
	);
};

export default Quotes;
