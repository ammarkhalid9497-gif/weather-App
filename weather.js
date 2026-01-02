const apiKey = "97fe00fc0c70e91e989ea40105b35004"; // Yahan apni API key dalein
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        alert("City not found!");
    } else {
        var data = await response.json();
        console.log(data);
        // Weather condition check karna (e.g., Clouds, Rain, Clear)
        const condition = data.weather[0].main;

        if (condition == "Clouds") {
            document.body.style.backgroundImage = "url('https://up.yimg.com/ib/th/id/OIP.F0CTsfchcb3p5KhyFfRQ8gHaE8?pid=Api&rs=1&c=1&qlt=95&w=147&h=98')";
        }
        else if (condition == "Clear") {
            document.body.style.backgroundImage = "url('https://up.yimg.com/ib/th/id/OIP.BnoqOSzoSpE5wl7fA3RghgHaEy?pid=Api&rs=1&c=1&qlt=95&w=165&h=107')";
        }
        else if (condition == "Rain") {
            document.body.style.backgroundImage = "url('https://up.yimg.com/ib/th/id/OIP.OwjBEKd5VZ91vEbNPdS7wwHaEK?pid=Api&rs=1&c=1&qlt=95&w=210&h=118')";
        }
        else if (condition == "Snow") {
            document.body.style.backgroundImage = "url('https://tse1.mm.bing.net/th/id/OIP.c99YqluEsHaL_79xNNbVRgHaEK?pid=Api&P=0&h=220')";
        }
        else {
            // Default background agar koi condition match na ho
            document.body.style.backgroundImage = "url('https://tse3.mm.bing.net/th/id/OIP.e9jnzyZZ8Mt7braRi3tV-AAAAA?pid=Api&P=0&h=220')";
        }
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = "Humidity: " + data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind: " + data.wind.speed + " km/h";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(cityInput.value);
});
// Jab user input field mein koi key dabaye
cityInput.addEventListener("keypress", (event) => {
    // Check karein ke dabai gayi key "Enter" hai ya nahi
    if (event.key === "Enter") {
        // Agar Enter dabaya gaya hai, to weather check karne wala function chala dein
        checkWeather(cityInput.value);
    }
});// Jab user input field mein koi key dabaye
cityInput.addEventListener("keypress", (event) => {
    // Check karein ke dabai gayi key "Enter" hai ya nahi
    if (event.key === "Enter") {
        // Agar Enter dabaya gaya hai, to weather check karne wala function chala dein
        checkWeather(cityInput.value);
    }
});