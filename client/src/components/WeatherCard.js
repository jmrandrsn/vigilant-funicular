import '../App.css';
import { useState, useEffect } from 'react';

function WeatherCard({ data }) {
	if (!data) return null;

	return (
		<div className="weatherCard">
			<div className="city_name">
				<h2>
					{data.city?.name}, {data.city?.country}
				</h2>
			</div>
			<div className="description">
				<h6> {data.list[0].weather[0].description}</h6>
			</div>

			<div className="temperature">
				<h1> {data.list[0].main.temp}&deg;F </h1>
			</div>
			<div className="pressure_humidity">
				<h4>Pressure: {data.list[0].main.pressure} </h4>
				<h4>Humidity: {data.list[0].main.humidity}&deg;F </h4>
			</div>
			<div className="five_day_forecast">
				<div style={{ display: 'flex', justifyContent: 'space-around' }}>
					<div>
						{new Date(data.list[9].dt * 1000).toLocaleDateString('en-US', {
							month: 'numeric',
							day: 'numeric',
						})}
						<p> {data.list[9].main.temp_max}&deg; </p>
						<p> {data.list[9].weather[0].description} </p>
					</div>
					<div>
						{new Date(data.list[17].dt * 1000).toLocaleDateString('en-US', {
							month: 'numeric',
							day: 'numeric',
						})}
						<p> {data.list[17].main.temp_max}&deg; </p>
						<p> {data.list[17].weather[0].description} </p>
					</div>
					<div>
						{new Date(data.list[25].dt * 1000).toLocaleDateString('en-US', {
							month: 'numeric',
							day: 'numeric',
						})}
						<p> {data.list[25].main.temp_max}&deg; </p>
						<p> {data.list[25].weather[0].description} </p>
					</div>
					<div>
						{new Date(data.list[33].dt * 1000).toLocaleDateString('en-US', {
							month: 'numeric',
							day: 'numeric',
						})}
						<p> {data.list[33].main.temp_max}&deg; </p>
						<p> {data.list[33].weather[0].description} </p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WeatherCard;
