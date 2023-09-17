/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const form = document.querySelector('form');\nconst submitBtn = document.querySelector('.submit-btn');\nconst error = document.querySelector('.error-msg');\nconst img = document.querySelector(\".weather-img\")\n\nform.addEventListener('submit', handleSubmit);\nsubmitBtn.addEventListener('click', handleSubmit);\n\nfunction handleSubmit(e) {\n\te.preventDefault();\n\tfetchWeather();\n}\n\nasync function getWeatherInfo(location) {\n\tconst response = await fetch(\n\t\t`https://api.weatherapi.com/v1/current.json?key=397974d7fd184961aa264858231509&q=${location}`,\n\t\t{\n\t\t\tmode: 'cors',\n\t\t}\n\t);\n\n\tif (response.status === 400) {\n\t\tthrowError();\n\t} else {\n\t\terror.style.display = 'none';\n\t\tconst weatherData = await response.json();\n\t\tconst newData = processData(weatherData);\n\t\tdisplayData(newData);\n\t\treset();\n\t}\n}\n\n\n\nfunction throwError() {\n\terror.style.display = 'block';\n\t// if (error.classList.contains('fade-in')) {\n\t// \terror.style.display = 'none';\n\t// \terror.classList.remove('fade-in2');\n\t// \terror.offsetWidth;\n\t// \terror.classList.add('fade-in');\n\t// \terror.style.display = 'block';\n\t// } else {\n\t// \terror.classList.add('fade-in');\n\t// }\n}\n\nfunction processData(weatherData) {\n\tconst myData = {\n\t\tcondition: weatherData.current.condition.text,\n\t\tfeelsLike: {\n\t\t\tf: Math.round(weatherData.current.feelslike_f),\n\t\t\tc: Math.round(weatherData.current.feelslike_c),\n\t\t},\n\t\tcurrentTemp: {\n\t\t\tf: Math.round(weatherData.current.temp_f),\n\t\t\tc: Math.round(weatherData.current.temp_c),\n\t\t},\n\t\twind: Math.round(weatherData.current.wind_mph),\n\t\thumidity: weatherData.current.humidity,\n\t\tlocation: weatherData.location.name.toUpperCase(),\n\t};\n\n\n\tmyData.region = weatherData.location.country.toUpperCase();\n\n\treturn myData;\n}\n\n\nfunction displayData(newData) {\n\t// const weatherInfo = document.getElementsByClassName('info');\n\t// Array.from(weatherInfo).forEach((div) => {\n\t// \tif (div.classList.contains('fade-in2')) {\n\t// \t\tdiv.classList.remove('fade-in2');\n\t// \t\tdiv.offsetWidth;\n\t// \t\tdiv.classList.add('fade-in2');\n\t// \t} else {\n\t// \t\tdiv.classList.add('fade-in2');\n\t// \t}\n\t// });\n\n\tdocument.querySelector('.condition').textContent = newData.condition;\n\tdocument.querySelector(\n\t\t'.location'\n\t).textContent = `${newData.location}, ${newData.region}`;\n\tdocument.querySelector('.degrees').textContent = newData.currentTemp.f;\n\tdocument.querySelector(\n\t\t'.feels-like'\n\t).textContent = `FEELS LIKE: ${newData.feelsLike.f}`;\n\tdocument.querySelector('.wind-mph').textContent = `WIND: ${newData.wind} MPH`;\n\tdocument.querySelector(\n\t\t'.humidity'\n\t).textContent = `HUMIDITY: ${newData.humidity}`;\n\n\tgetGifs(newData.condition);\n}\n\nfunction reset() {\n  form.reset();\n}\n\nfunction fetchWeather() {\n  const input = document.querySelector('input[type=\"text\"]');\n\n\tlet userLocation;\n\t// console.log(input.value);\n\n\tif(input.value === '') {\n\t\tuserLocation = 'Mumbai'\n\t} else {\n\t\tuserLocation = input.value;\n\t}\n  getWeatherInfo(userLocation);\n}\n\nasync function getGifs(search) {\n  try {\n    const response = await fetch(`https://api.giphy.com/v1/stickers/translate?api_key=SH56CSf4nIGbTXYHULC0m5Tb35y7zFO8&s=${search}-weather`, {mode: \"cors\"})\n    const sticker = await response.json();\n    img.src = sticker.data.images.fixed_height.url;\n  } catch (error){\n    console.log(error);\n  }\n};\n\n\nfetchWeather();\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;