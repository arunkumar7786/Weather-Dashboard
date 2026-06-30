const welcome = document.getElementById("welcome");
const logoutBtn = document.getElementById("logoutBtn");

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feelsLike");

const forecastContainer = document.getElementById("forecastContainer");

const user = localStorage.getItem("loggedInUser");

if (!user) {
    window.location.href = "index.html";
}

welcome.textContent = `Welcome, ${user}`;

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
});


searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    getWeather(city);
});

async function getWeather(city) {

    try {

        // Current Weather
                const currentResponse = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
            );

            if (!currentResponse.ok) {
                throw new Error("City not found");
            }

            const currentData = await currentResponse.json();

            cityName.textContent = currentData.location.name;
            temperature.textContent = `${Math.round(currentData.current.temp_c)}°C`;
            condition.textContent = currentData.current.condition.text;
            humidity.textContent = `${currentData.current.humidity}%`;
            wind.textContent = `${currentData.current.wind_kph} km/h`;
            feelsLike.textContent = `${Math.round(currentData.current.feelslike_c)}°C`;

            changeBackground(currentData.current.condition.text);

        // Forecast
        const forecastResponse = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`
        );

        const forecastData = await forecastResponse.json();

        displayForecast(forecastData.forecast.forecastday);

    } catch (error) {

        alert(error.message);

    }
}

function displayForecast(days) {

    forecastContainer.innerHTML = "";

    days.forEach(day => {

        const date = new Date(day.date);

        const card = `
            <div class="forecast-card">

                <h3>${date.toLocaleDateString("en-US",{weekday:"long"})}</h3>

                <img src="https:${day.day.condition.icon}" alt="Weather">

                <h2>${Math.round(day.day.avgtemp_c)}°C</h2>

                <p>${day.day.condition.text}</p>

            </div>
        `;

        forecastContainer.innerHTML += card;

    });

}

function changeBackground(weather){

    weather = weather.toLowerCase();

    if(weather.includes("sun") || weather.includes("clear")){

        document.body.style.background =
        "linear-gradient(135deg,#56CCF2,#2F80ED)";

    }
    else if(weather.includes("cloud")){

        document.body.style.background =
        "linear-gradient(135deg,#757F9A,#D7DDE8)";

    }
    else if(weather.includes("rain") || weather.includes("drizzle")){

        document.body.style.background =
        "linear-gradient(135deg,#4B79A1,#283E51)";

    }
    else if(weather.includes("snow")){

        document.body.style.background =
        "linear-gradient(135deg,#E6DADA,#274046)";

    }
    else{

        document.body.style.background =
        "linear-gradient(135deg,#4facfe,#00f2fe)";
    }

}
