import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
	const [city, setCity] = useState('');

	const fetchData = async () => {};

	return (
		<div className="App">
			<header className="App-header">Weather App</header>
			<SearchBar onSearch={(value) => setCity(value)} />
			<WeatherCard city={city} />
		</div>
	);
}

export default App;
