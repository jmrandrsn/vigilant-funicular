import './App.css';
import { useState } from 'react';
import { key, API_URL } from './utils/api';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
	const [city, setCity] = useState('');
	const [weatherData, setWeatherData] = useState(null);

	const fetchData = async (city) => {
		const response = await fetch(
			`${API_URL}${city}&appid=${key}&units=imperial`,
		);
		const data = await response.json();
		// console.log(data);
		const lat = data.coord.lat;
		const lon = data.coord.lon;
		const forecastResponse = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`,
		);
		const forecastData = await forecastResponse.json();
		console.log(forecastData);
		setWeatherData(forecastData);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="title">Vigilant Funicular</h1>
				<SearchBar
					className="searchBar"
					onSearch={(value) => setCity(value)}
					onApi={fetchData}
				/>
			</header>
			<div className="weather_container">
				<WeatherCard city={city} />
				{weatherData && <WeatherCard data={weatherData} />}
				{/* //Instead of Passing the city name I want to
			pass the entire API response here */}
			</div>
		</div>
	);
}

export default App;
