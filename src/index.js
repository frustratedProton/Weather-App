const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit-btn');
const error = document.querySelector('.error-msg');
const img = document.querySelector('.weather-img');

form.addEventListener('submit', handleSubmit);
submitBtn.addEventListener('click', handleSubmit);

function handleSubmit(e) {
	e.preventDefault();
	fetchWeather();
}

async function getWeatherInfo(location) {
	const response = await fetch(
		`https://api.weatherapi.com/v1/current.json?key=397974d7fd184961aa264858231509&q=${location}`,
		{
			mode: 'cors',
		}
	);

	if (response.status === 400) {
		throwError();
	} else {
		error.style.display = 'none';
		const weatherData = await response.json();
		const newData = processData(weatherData);
		displayData(newData);
		reset();
	}
}

function throwError() {
	error.style.display = 'block';
}

function processData(weatherData) {
	const myData = {
		condition: weatherData.current.condition.text,
		feelsLike: {
			f: Math.round(weatherData.current.feelslike_f),
			c: Math.round(weatherData.current.feelslike_c),
		},
		currentTemp: {
			f: Math.round(weatherData.current.temp_f),
			c: Math.round(weatherData.current.temp_c),
		},
		wind: Math.round(weatherData.current.wind_mph),
		humidity: weatherData.current.humidity,
		location: weatherData.location.name.toUpperCase(),
	};

	myData.region = weatherData.location.country.toUpperCase();

	return myData;
}

function displayData(newData) {
	document.querySelector('.condition').textContent = newData.condition;
	document.querySelector(
		'.location'
	).textContent = `${newData.location}, ${newData.region}`;
	document.querySelector('.degrees').textContent = newData.currentTemp.f;
	document.querySelector(
		'.feels-like'
	).textContent = `FEELS LIKE: ${newData.feelsLike.f}`;
	document.querySelector('.wind-mph').textContent = `WIND: ${newData.wind} MPH`;
	document.querySelector(
		'.humidity'
	).textContent = `HUMIDITY: ${newData.humidity}`;

	getGifs(newData.condition);
}

function reset() {
	form.reset();
}

function fetchWeather() {
	const input = document.querySelector('input[type="text"]');

	let userLocation;
	// console.log(input.value);

	if (input.value === '') {
		userLocation = 'Mumbai';
	} else {
		userLocation = input.value;
	}
	getWeatherInfo(userLocation);
}

async function getGifs(search) {
	try {
		const response = await fetch(
			`https://api.giphy.com/v1/stickers/translate?api_key=SH56CSf4nIGbTXYHULC0m5Tb35y7zFO8&s=${search}-weather`,
			{ mode: 'cors' }
		);
		const sticker = await response.json();
		img.src = sticker.data.images.fixed_height.url;
	} catch (error) {
		console.log(error);
	}
}

fetchWeather();
