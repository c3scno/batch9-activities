// Get user geolocation
const success = (data) => {
    const lat = data.coords.latitude;
    const long = data.coords.longitude;
    // Feed lat and long to network request function & call network request
    console.log(lat, long);
    getWeather(lat, long);
};

// Handle if user denies access
const failure = (response) => {
    console.log(response.message);
    const displayLocation = document.querySelector("#location");
    displayLocation.textContent = response.message;
};

// Network request function
const getWeather = async (lat, long) => {
    // Key
    const apiKey = "jvWKG4XcV4oanUl7FxEf7ZsceeePGRPs";
    const url =
        "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search";

    // Get location info
    const locationResponse = await fetch(`${url}?apikey=${apiKey}&q=${lat}%2C${long}`);
    const locationData = await locationResponse.json();
    // Retrieve current location ID (to get weather info)
    const curLocationID = locationData.Key;

    // Get weather info
    const weatherResponse = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${curLocationID}?apikey=${apiKey}`)
    const weatherData = await weatherResponse.json();
    console.log(weatherData);

    // Feed the data to update UI
    const curLocation = locationData.LocalizedName;
    const curTemp = weatherData[0].Temperature.Metric.Value;
    const curIcon = weatherData[0].WeatherText;
    updateWeather(curLocation, curTemp, curIcon);
};

// Update the weather
const updateWeather = (curLocation, curTemp, curIcon) => {
    // DOM elements
    const displayIcon = document.querySelector("#weather");
    const displayTemp = document.querySelector("#temp");
    const displayLocation = document.querySelector("#location");
    // Update DOM elements
    displayIcon.textContent = curIcon;
    displayLocation.textContent = curLocation;
    displayTemp.textContent = `${curTemp}°C`;
};

// Attempt to retrieve user geolocation (latitude, longitude)
navigator.geolocation.getCurrentPosition(success, failure);