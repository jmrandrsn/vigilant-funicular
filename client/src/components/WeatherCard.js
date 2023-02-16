import { useState, useEffect } from 'react';

function WeatherCard(props) {
	return (
		<div>
			<h1>{props.city}</h1>
		</div>
	);
}

export default WeatherCard;
