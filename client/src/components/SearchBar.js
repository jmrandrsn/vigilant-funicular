import { useState, useEffect } from 'react';

function SearchBar({ onSearch, onApi }) {
	const [value, setValue] = useState('');

	const handleSearch = (e) => {
		e.preventDefault();
		onSearch(value);
		onApi(value);
		setValue('');
		console.log(value);
	};

	return (
		<div>
			<form onSubmit={handleSearch}>
				<input
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder="Search for a city"
				/>
			</form>
		</div>
	);
}

export default SearchBar;
