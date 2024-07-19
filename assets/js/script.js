//Declaring and selecting variables
const searchCityEl = document.querySelector("#searchCity");
const searchButtonEl = document.querySelector("#searchButton");
const todayEl = document.querySelector("#today");
const searchHistoryEl = document.querySelector("#searchHistory");
const dayOneOfFive = document.querySelector("#fiveDayOne");
const dayTwoOfFive = document.querySelector("#fiveDayTwo");
const dayThreeOfFive = document.querySelector("#fiveDayThree");
const dayFourOfFive = document.querySelector("#fiveDayFour");
const dayFiveOfFive = document.querySelector("#fiveDayFive");
const cities = JSON.parse(localStorage.getItem("cities")) || [];

//Assign the function handleHistorySearch to search the browser history API for data
function handleHistorySearch(event) {
  // Send the search data to the console
  console.log(event.target.id);
  forcast(event.target.id);
}

// Call a function to search the browser API history for data pertaining to stored cities.
function displayStoredCities() {
  //  Defining the searchHistoryEl variable as an array containing text and returning the array to the console log.
  searchHistoryEl.innerHTML = "";
  for (i = 0; i < cities.length; i++) {
    console.log(cities);
    // Declaring the variable historyEl and assigning a button element to interact with it.
    const historyEl = document.createElement("button");
    // Defining the attributes of the historyEl button
    historyEl.textContent = cities[i];
    historyEl.setAttribute("class", "btn btn-outline-info city");
    historyEl.setAttribute("id", `${cities[i]}`);
    // Moving the retreived data from the variable historyEL to the child variable hstoryEl.
    searchHistoryEl.appendChild(historyEl);
    //  Add an event listener to listen for clicks to run the handleHistorySearch function.
    historyEl.addEventListener("click", handleHistorySearch);
  }
}

// Define a function to convert the temperature date from Kelvin to Farenheit and return the converted temperature.
function tempConversion(tempKelvin) {
  const convertedTemp = Math.round(
    ((Number(tempKelvin) - 273.15) * 9) / 5 + 32
  );
  return convertedTemp;
}

// Define a function to convert the wind speed from miles per second to miles per hour and return the converted wind speed.
function windSpeedConversion(speedMps) {
  const convertedSpeed = Math.round(Number(speedMps) * 223.7) / 100;
  return convertedSpeed;
}

// Define a function to format the date to xx/xx/xxxx (month/day/year) and return the formatted date.
function dateFormatted(date) {
  const dateFormat = `${date.slice(5, 7)}/${date.slice(8, 10)}/${date.slice(
    0,
    4
  )}`;
  return dateFormat;
}

// Define a function that will get and store data retrieved from the storeSearchHistory(city) in the lscities array,
function storeSearchHistory(city) {
  // if the data is found in localAr, it will be convert  to an object using JSON.parse and pushed from the lscities array to localArr using JSON.push,

  if (cities.includes(city)) return;
  cities.push(city);
  console.log(cities);

  // otherwise the new data will be pushed from the cities array to the city array and return cities to the console.log(cities);

  // send cities array to the console log
  console.log(cities);
  //   convert localStorage(cities) to a string using JSON.stringify.
  localStorage.setItem("cities", JSON.stringify(cities));
}

// Define function forcast(citySearch) to search the weather api by city and fetch the response.
function forcast(citySearch) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&appid=14f0c64f1a5ced7598c652866b9b0850`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })

    //  Declare a series of variables to contain search information for manipulation of data retrieved from the api; creating elements to store the location of weather icons, the formatted date, city date, and to create elements (arrays) for storage of weather information covering today's date and a 5 day weather forecast.
    .then(function (data) {
      console.log(data);
      const todayIcon = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
      const todayDate = dateFormatted(data.list[0].dt_txt);
      const todayCityDateEl = document.createElement("h2");
      const todayImgEl = document.createElement("img");
      const todayTempEl = document.createElement("p");
      const todayWindEl = document.createElement("p");
      const todayHumidityEl = document.createElement("p");

      const dayOneOfFiveIcon = `https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png`;
      const dayOneOfFiveDate = dateFormatted(data.list[7].dt_txt);
      const dayOneOfFiveDateEl = document.createElement("h3");
      const dayOneOfFiveImgEl = document.createElement("img");
      const dayOneOfFiveTempEl = document.createElement("p");
      const dayOneOfFiveWindEl = document.createElement("p");
      const dayOneOfFiveHumidityEl = document.createElement("p");

      const dayTwoOfFiveIcon = `https://openweathermap.org/img/wn/${data.list[15].weather[0].icon}@2x.png`;
      const dayTwoOfFiveDate = dateFormatted(data.list[15].dt_txt);
      const dayTwoOfFiveDateEl = document.createElement("h3");
      const dayTwoOfFiveImgEl = document.createElement("img");
      const dayTwoOfFiveTempEl = document.createElement("p");
      const dayTwoOfFiveWindEl = document.createElement("p");
      const dayTwoOfFiveHumidityEl = document.createElement("p");

      const dayThreeOfFiveIcon = `https://openweathermap.org/img/wn/${data.list[23].weather[0].icon}@2x.png`;
      const dayThreeOfFiveDate = dateFormatted(data.list[23].dt_txt);
      const dayThreeOfFiveDateEl = document.createElement("h3");
      const dayThreeOfFiveImgEl = document.createElement("img");
      const dayThreeOfFiveTempEl = document.createElement("p");
      const dayThreeOfFiveWindEl = document.createElement("p");
      const dayThreeOfFiveHumidityEl = document.createElement("p");

      const dayFourOfFiveIcon = `https://openweathermap.org/img/wn/${data.list[31].weather[0].icon}@2x.png`;
      const dayFourOfFiveDate = dateFormatted(data.list[31].dt_txt);
      const dayFourOfFiveDateEl = document.createElement("h3");
      const dayFourOfFiveImgEl = document.createElement("img");
      const dayFourOfFiveTempEl = document.createElement("p");
      const dayFourOfFiveWindEl = document.createElement("p");
      const dayFourOfFiveHumidityEl = document.createElement("p");

      const dayFiveOfFiveIcon = `https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;
      const dayFiveOfFiveDate = dateFormatted(data.list[39].dt_txt);
      const dayFiveOfFiveDateEl = document.createElement("h3");
      const dayFiveOfFiveImgEl = document.createElement("img");
      const dayFiveOfFiveTempEl = document.createElement("p");
      const dayFiveOfFiveWindEl = document.createElement("p");
      const dayFiveOfFiveHumidityEl = document.createElement("p");

      // Set attributes for formatting and displaying today's weather and a 5 day weather forecast.
      todayCityDateEl.textContent = `${data.city.name} ${todayDate}`;
      todayImgEl.setAttribute("src", todayIcon);
      todayTempEl.textContent = `Temp: ${tempConversion(
        data.list[0].main.temp
      )}°F`;
      todayWindEl.textContent = `Wind: ${windSpeedConversion(
        data.list[0].wind.speed
      )} MPH`;
      todayHumidityEl.textContent = `Humidity: ${data.list[0].main.humidity}%`;

      dayOneOfFiveDateEl.textContent = dayOneOfFiveDate;
      dayOneOfFiveImgEl.setAttribute("src", dayOneOfFiveIcon);
      dayOneOfFiveTempEl.textContent = `Temp: ${tempConversion(
        data.list[7].main.temp
      )}°F`;
      dayOneOfFiveWindEl.textContent = `Wind: ${windSpeedConversion(
        data.list[7].wind.speed
      )} MPH`;
      dayOneOfFiveHumidityEl.textContent = `Humidity: ${data.list[7].main.humidity}%`;

      dayTwoOfFiveDateEl.textContent = dayTwoOfFiveDate;
      dayTwoOfFiveImgEl.setAttribute("src", dayTwoOfFiveIcon);
      dayTwoOfFiveTempEl.textContent = `Temp: ${tempConversion(
        data.list[15].main.temp
      )}°F`;
      dayTwoOfFiveWindEl.textContent = `Wind: ${windSpeedConversion(
        data.list[15].wind.speed
      )} MPH`;
      dayTwoOfFiveHumidityEl.textContent = `Humidity: ${data.list[15].main.humidity}%`;

      dayThreeOfFiveDateEl.textContent = dayThreeOfFiveDate;
      dayThreeOfFiveImgEl.setAttribute("src", dayThreeOfFiveIcon);
      dayThreeOfFiveTempEl.textContent = `Temp: ${tempConversion(
        data.list[23].main.temp
      )}°F`;
      dayThreeOfFiveWindEl.textContent = `Wind: ${windSpeedConversion(
        data.list[23].wind.speed
      )} MPH`;
      dayThreeOfFiveHumidityEl.textContent = `Humidity: ${data.list[23].main.humidity}%`;

      dayFourOfFiveDateEl.textContent = dayFourOfFiveDate;
      dayFourOfFiveImgEl.setAttribute("src", dayFourOfFiveIcon);
      dayFourOfFiveTempEl.textContent = `Temp: ${tempConversion(
        data.list[31].main.temp
      )}°F`;
      dayFourOfFiveWindEl.textContent = `Wind: ${windSpeedConversion(
        data.list[31].wind.speed
      )} MPH`;
      dayFourOfFiveHumidityEl.textContent = `Humidity: ${data.list[31].main.humidity}%`;

      dayFiveOfFiveDateEl.textContent = dayFiveOfFiveDate;
      dayFiveOfFiveImgEl.setAttribute("src", dayFiveOfFiveIcon);
      dayFiveOfFiveTempEl.textContent = `Temp: ${tempConversion(
        data.list[39].main.temp
      )}°F`;
      dayFiveOfFiveWindEl.textContent = `Wind: ${windSpeedConversion(
        data.list[39].wind.speed
      )} MPH`;
      dayFiveOfFiveHumidityEl.textContent = `Humidity: ${data.list[39].main.humidity}%`;

      // Series of code to append new data from variables todayEl, todayCityDateEl, dayOneOfFiveEl,  dayTwoOfFiveEl,  dayThreeOfFiveEl,  dayFourOfFiveEl, and  dayFiveOfFive to the end of todayCityDateEl, todayImgEl, todayTempEl, todayWindEl, and todayHumidityEl arrays and those arrays associated with days 1-5.
      todayEl.textContent = "";
      todayEl.appendChild(todayCityDateEl);
      todayEl.appendChild(todayImgEl);
      todayEl.appendChild(todayTempEl);
      todayEl.appendChild(todayWindEl);
      todayEl.appendChild(todayHumidityEl);

      // append
      dayOneOfFive.textContent = "";
      dayOneOfFive.appendChild(dayOneOfFiveDateEl);
      dayOneOfFive.appendChild(dayOneOfFiveImgEl);
      dayOneOfFive.appendChild(dayOneOfFiveTempEl);
      dayOneOfFive.appendChild(dayOneOfFiveWindEl);
      dayOneOfFive.appendChild(dayOneOfFiveHumidityEl);

      dayTwoOfFive.textContent = "";
      dayTwoOfFive.appendChild(dayTwoOfFiveDateEl);
      dayTwoOfFive.appendChild(dayTwoOfFiveImgEl);
      dayTwoOfFive.appendChild(dayTwoOfFiveTempEl);
      dayTwoOfFive.appendChild(dayTwoOfFiveWindEl);
      dayTwoOfFive.appendChild(dayTwoOfFiveHumidityEl);

      dayThreeOfFive.textContent = "";
      dayThreeOfFive.appendChild(dayThreeOfFiveDateEl);
      dayThreeOfFive.appendChild(dayThreeOfFiveImgEl);
      dayThreeOfFive.appendChild(dayThreeOfFiveTempEl);
      dayThreeOfFive.appendChild(dayThreeOfFiveWindEl);
      dayThreeOfFive.appendChild(dayThreeOfFiveHumidityEl);

      dayFourOfFive.textContent = "";
      dayFourOfFive.appendChild(dayFourOfFiveDateEl);
      dayFourOfFive.appendChild(dayFourOfFiveImgEl);
      dayFourOfFive.appendChild(dayFourOfFiveTempEl);
      dayFourOfFive.appendChild(dayFourOfFiveWindEl);
      dayFourOfFive.appendChild(dayFourOfFiveHumidityEl);

      dayFiveOfFive.textContent = "";
      dayFiveOfFive.appendChild(dayFiveOfFiveDateEl);
      dayFiveOfFive.appendChild(dayFiveOfFiveImgEl);
      dayFiveOfFive.appendChild(dayFiveOfFiveTempEl);
      dayFiveOfFive.appendChild(dayFiveOfFiveWindEl);
      dayFiveOfFive.appendChild(dayFiveOfFiveHumidityEl);
    });
  storeSearchHistory(citySearch);
  displayStoredCities();
}

// Stops the function in the absence of an event
function handleSearch(event) {
  event.preventDefault();
  forcast(searchCityEl.value);
}

searchButtonEl.addEventListener("click", handleSearch);
