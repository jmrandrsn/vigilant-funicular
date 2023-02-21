import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState, useEffect } from 'react';

function WeatherCard({ data }) {
	if (!data) return null;

	const getIconClass = (weatherDescription) => {
		switch (weatherDescription) {
			case 'clear sky':
				return 'fas fa-sun';
			case 'few clouds':
				return 'fas fa-cloud';
			case 'scattered clouds':
				return 'fas fa-clouds-sun';
			case 'broken clouds':
				return 'fas fa-cloud';
			case 'shower rain':
				return 'fas fa-cloud-showers';
			case 'rain':
				return 'fas fa-cloud-showers-heavy';
			case 'thunderstorm':
				return 'fas fa-bolt';
			case 'thunderstorm with light rain':
			case 'thunderstorm with rain':
			case 'thunderstorm with heavy rain':
			case 'light thunderstorm':
			case 'heavy thunderstorm':
			case 'ragged thunderstorm':
			case 'thunderstorm with light drizzle':
			case 'thunderstorm with drizzle':
			case 'thunderstorm with heavy drizzle':
				return 'fas fa-bolt';
			case 'light intensity drizzle':
			case 'drizzle':
			case 'heavy intensity drizzle':
			case 'light intensity drizzle rain':
			case 'drizzle rain':
			case 'heavy intensity drizzle rain':
			case 'shower rain and drizzle':
			case 'heavy shower rain and drizzle':
			case 'shower drizzle':
				return 'fas fa-cloud-drizzle';
			case 'light rain':
			case 'moderate rain':
			case 'heavy intensity rain':
			case 'very heavy rain':
			case 'extreme rain':
				return 'fas fa-cloud-rain';
			case 'freezing rain':
				return 'fas fa-snowflake';
			case 'light intensity shower rain':
			case 'shower rain':
			case 'heavy intensity shower rain':
			case 'ragged shower rain':
				return 'fas fa-cloud-showers-heavy';
			case 'light snow':
			case 'snow':
			case 'heavy snow':
			case 'sleet':
			case 'light shower sleet':
			case 'shower sleet':
			case 'light rain and snow':
			case 'rain and snow':
			case 'light shower snow':
			case 'shower snow':
			case 'heavy shower snow':
				return 'fas fa-snowflake';
			case 'mist':
			case 'smoke':
			case 'haze':
			case 'sand/dust whirls':
			case 'fog':
			case 'sand':
			case 'dust':
			case 'volcanic ash':
			case 'squalls':
			case 'overcast clouds':
				return 'fas fa-cloud';
			case 'tornado':
				return 'fas fa-smog';
			default:
				return 'fas fa-question';
		}
	};

	return (
		<div className="weatherCard">
			<div className="city_name">
				<h2>
					{data.city?.name}, {data.city?.country}
				</h2>
			</div>
			<div className="description">
				<h3>
					{new Date(data.list[0].dt * 1000).toLocaleDateString('en-US', {
						weekday: 'long',
					})}
				</h3>
				<i
					className={`${getIconClass(
						data.list[0].weather[0].description,
					)} fa-2x`}
				></i>
				<h6> {data.list[0].weather[0].description}</h6>
			</div>

			<div className="temperature">
				<h1> {Math.round(data.list[0].main.temp)}&deg;F </h1>
			</div>
			<div className="pressure_humidity">
				<h4>Pressure: {data.list[0].main.pressure} </h4>
				<h4>Humidity: {data.list[0].main.humidity}&deg;F </h4>
			</div>
			<div className="five_day_forecast">
				<div style={{ display: 'flex', justifyContent: 'space-around' }}>
					<div>
						<p>
							{new Date(data.list[9].dt * 1000).toLocaleDateString('en-US', {
								weekday: 'long',
							})}
						</p>
						{new Date(data.list[9].dt * 1000).toLocaleDateString('en-US', {
							month: 'numeric',
							day: 'numeric',
						})}
						<p> {Math.round(data.list[9].main.temp_max)}&deg;F </p>
						<i
							className={getIconClass(data.list[9].weather[0].description)}
						></i>
						<p> {data.list[9].weather[0].description} </p>
					</div>
					<div>
						<p>
							{new Date(data.list[17].dt * 1000).toLocaleDateString('en-US', {
								weekday: 'long',
							})}
						</p>
						{new Date(data.list[17].dt * 1000).toLocaleDateString('en-US', {
							month: 'numeric',
							day: 'numeric',
						})}
						<p> {Math.round(data.list[17].main.temp_max)}&deg;F </p>
						<i
							className={getIconClass(data.list[17].weather[0].description)}
						></i>
						<p> {data.list[17].weather[0].description} </p>
					</div>
					<div>
						<p>
							{new Date(data.list[25].dt * 1000).toLocaleDateString('en-US', {
								weekday: 'long',
							})}
						</p>
						{new Date(data.list[25].dt * 1000).toLocaleDateString('en-US', {
							month: 'numeric',
							day: 'numeric',
						})}
						<p> {Math.round(data.list[25].main.temp_max)}&deg;F </p>
						<i
							className={getIconClass(data.list[25].weather[0].description)}
						></i>
						<p> {data.list[25].weather[0].description} </p>
					</div>
					<div>
						<p>
							{new Date(data.list[33].dt * 1000).toLocaleDateString('en-US', {
								weekday: 'long',
							})}
						</p>
						{new Date(data.list[33].dt * 1000).toLocaleDateString('en-US', {
							month: 'numeric',
							day: 'numeric',
						})}
						<p> {Math.round(data.list[33].main.temp_max)}&deg;F </p>
						<i
							className={getIconClass(data.list[33].weather[0].description)}
						></i>
						<p> {data.list[33].weather[0].description} </p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WeatherCard;
