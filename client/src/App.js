import { useState } from 'react';
import { key, API_URL } from './utils/api';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

function App() {
	const [city, setCity] = useState('');
	const [weatherData, setWeatherData] = useState(null);

	const fetchData = async (option) => {
		const lat = await option.coords.lat;
		const lon = await option.coords.lon;
		// const city = await option.city;
		console.log(lon);
		console.log(lat);

		const forecastResponse = await fetch(
			`${API_URL}lat=${lat}&lon=${lon}&appid=${key}&units=imperial`,
		);
		const forecastData = await forecastResponse.json();

		console.log(forecastData);
		setCity(option.city);
		console.log(city);

		setWeatherData(forecastData);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="title">Vigilant Funicular</h1>
				<SearchBar onSearch={(value) => setCity(value)} onApi={fetchData} />
			</header>
			<div className="weather_container">
				{/* {city && <WeatherCard city={city} />} */}
				{weatherData && <WeatherCard data={weatherData} />}
			</div>
		</div>
	);
}

export default App;
