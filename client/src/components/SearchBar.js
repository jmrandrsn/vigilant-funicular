import { useState } from 'react';
import { GEO_API } from '../utils/api';
import { AsyncPaginate } from 'react-select-async-paginate';

function SearchBar({ onSearch, onApi }) {
	const [value, setValue] = useState('');

	const loadOptions = async (inputValue, _prevOptions, _currentPage) => {
		const response = await fetch(`${GEO_API.url}?namePrefix=${inputValue}`, {
			method: GEO_API.method,
			headers: GEO_API.headers,
		});

		const data = await response.json();
		const options = data.data.map((search) => ({
			value: search.city + ', ' + search.region,
			label: search.city + ', ' + search.region,
			coords: {
				lat: search.latitude,
				lon: search.longitude,
			},
			city: search.city,
		}));

		return {
			options,
			hasMore: false,
			additional: {
				page: _currentPage + 1,
			},
		};
	};

	const handleChange = (options) => {
		console.log(options);
		onSearch(options.city);
		onApi(options);
		console.log(options.city);
	};

	return (
		<div>
			<AsyncPaginate
				value={value}
				debounceTimeout={600}
				loadOptions={loadOptions}
				placeholder="Search for a city"
				onChange={handleChange}
			/>
		</div>
	);
}

export default SearchBar;
