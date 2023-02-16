import '../App.css';
import { useState, useEffect } from 'react';

function WeatherCard({ data }) {
	if (!data) return null;

	return (
		<div>
			<h1>
				City Name: {data.city?.name}, {data.city?.country}
			</h1>
			<h4>Current Temp: {data.list[0].main.temp} Degrees</h4>
			<h4>Pressure: {data.list[0].main.pressure} </h4>
			<h4>Humidity: {data.list[0].main.humidity} </h4>
			<h4>Looks Like: {data.list[0].weather[0].description}</h4>
		</div>
	);
}

export default WeatherCard;
