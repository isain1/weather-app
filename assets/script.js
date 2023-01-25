//The following block of code is used to populate the date for the current day and the five day forecast.
window.addEventListener('load', function() {
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    today = date.getDate();
    tomorrow = today + 1;
    dayAfterTomorrow = today + 2;
    twoDaysAfterTomorrow = today + 3;
    threeDaysAfterTomorrow = today + 4;
    fourDaysAfterTomorrow = today + 5;
    document.getElementById("tomorrow").innerHTML = month + "/" + tomorrow + "/" + year;
    document.getElementById("day-after-tomorrow").innerHTML = month + "/" + dayAfterTomorrow + "/" + year;
    document.getElementById("two-days-after-tomorrow").innerHTML = month + "/" + twoDaysAfterTomorrow + "/" + year;
    document.getElementById("three-days-after-tomorrow").innerHTML = month + "/" + threeDaysAfterTomorrow + "/" + year;
    document.getElementById("four-days-after-tomorrow").innerHTML = month + "/" + fourDaysAfterTomorrow + "/" + year;
})

//Next 2 lines provide the api info we need to call the api.
let requestUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=';
let apiKey = "dd9b1eec455fe741df6e840a4eb39da1";

//The following defines some global variables that will be used later.
let detroitBtnEl = document.querySelector("#detroit");
let chicagoBtnEl = document.querySelector("#chi");
let newYorkCityBtnEl = document.querySelector("#nyc");
let losAngelesBtnEl = document.querySelector("#la");
let houstonBtnEl = document.querySelector("#hou");
let minneapolisBtnEl = document.querySelector("#min");
let miamiBtnEl = document.querySelector("#mia");
let charlotteBtnEl = document.querySelector("#cha");
let bostonBtnEl = document.querySelector("#bos");
let sanFranciscoBtnEl = document.querySelector("#sf");
let todayEl = document.getElementById("today");
let dayOneEl = document.getElementById("day-1");
let dayTwoEl = document.getElementById("day-2");
let dayThreeEl = document.getElementById("day-3");
let dayFourEl = document.getElementById("day-4");
let dayFiveEl = document.getElementById("day-5");

//The following provides the latitute and longitude of our base options since those are the parameters that the api uses.
let detroitLocation = ["42.33", "-83.04"];
let chicagoLocation = ["41.86", "-87.64"];
let newYorkCityLocation = ["40.75", "-73.98"];
let losAngelesLocation = ["34.04", "-118.26"];
let houstonLocation = ["29.75", "-95.36"];
let minneapolisLocation = ["44.97", "-93.27"];
let miamiLocation = ["25.76", "-80.19"];
let charlotteLocation = ["35.22", "-80.85"];
let bostonLocation = ["42.36", "-71.06"];
let sanFranciscoLocation = ["37.78", "-122.40"];


function buttonData(url, location) {
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            //Next 5 lines ensure that fetch request is pulling in the proper data.
            console.log(data);
            console.log(data.current.temp);
            console.log(data.current.humidity);
            console.log(data.current.wind_speed);
            console.log(data.current.uvi);
            //Next 5 lines take api data and populate the fields in the current days wheather conditions.
            document.querySelector("#today h2").innerHTML = location + " " + month + "/" + today + "/" + year;
            document.getElementById("current-temp").innerHTML = "Temperature: " + data.current.temp + "°F";
            document.getElementById("current-wind").innerHTML = "Wind speed: " + data.current.wind_speed + "MPH"; 
            document.getElementById("current-humidity").innerHTML = "Humidity: " + data.current.humidity + "%"; 
            document.getElementById("current-uvi").innerHTML = "UV Index: " + data.current.uvi;
            //If statement below changes the color of the UV index depending on whether or not it is considered favorable.
            if (data.current.uvi <= 2) {
                document.getElementById("current-uvi").style.backgroundColor = "green";
            }  else if ((data.current.uvi > 2) && (data.current.uvi < 7)) {
                document.getElementById("current-uvi").style.backgroundColor = "yellow";
            } else if (data.current.uvi >= 7) {
                document.getElementById("current-uvi").style.backgroundColor = "red";
            }
            //Next 16 lines populate the fields in our 5 day future forecast. 
            document.getElementById("day1-temp").innerHTML = "Temperature: " + data.daily[1].temp.max + "°F";
            document.getElementById("day1-wind").innerHTML = "Wind speed: " + data.daily[1].wind_speed + "MPH";
            document.getElementById("day1-humidity").innerHTML = "Humidity: " + data.daily[1].humidity + "%";
            document.getElementById("day2-temp").innerHTML = "Temperature: " + data.daily[2].temp.max + "°F";
            document.getElementById("day2-wind").innerHTML = "Wind speed: " + data.daily[2].wind_speed + "MPH";
            document.getElementById("day2-humidity").innerHTML = "Humidity: " + data.daily[2].humidity + "%";
            document.getElementById("day3-temp").innerHTML = "Temperature: " + data.daily[3].temp.max + "°F";
            document.getElementById("day3-wind").innerHTML = "Wind speed: " + data.daily[3].wind_speed + "MPH";
            document.getElementById("day3-humidity").innerHTML = "Humidity: " + data.daily[3].humidity + "%";
            document.getElementById("day4-temp").innerHTML = "Temperature: " + data.daily[4].temp.max + "°F";
            document.getElementById("day4-wind").innerHTML = "Wind speed: " + data.daily[4].wind_speed + "MPH";
            document.getElementById("day4-humidity").innerHTML = "Humidity: " + data.daily[4].humidity + "%";
            document.getElementById("day5-temp").innerHTML = "Temperature: " + data.daily[5].temp.max + "°F";
            document.getElementById("day5-wind").innerHTML = "Wind speed: " + data.daily[5].wind_speed + "MPH";
            document.getElementById("day5-humidity").innerHTML = "Humidity: " + data.daily[5].humidity + "%";
        });
};

detroitBtnEl.addEventListener('click', function() {
    let cityName = "Detroit"
    let newUrl = requestUrl + detroitLocation[0] + "&lon=" + detroitLocation[1] + "&appid=" + apiKey + "&units=imperial"; //Creates new url for api call that implements the required parameters.
    console.log(newUrl);
    buttonData(newUrl, cityName);
});

chicagoBtnEl.addEventListener('click', function() {
    let cityName = "Chicago"
    let newUrl = requestUrl + chicagoLocation[0] + "&lon=" + chicagoLocation[1] + "&appid=" + apiKey + "&units=imperial"; //Creates new url for api call that implements the required parameters.
    console.log(newUrl);
    buttonData(newUrl, cityName);
});

newYorkCityBtnEl.addEventListener('click', function() {
    let cityName = "New York City"
    let newUrl = requestUrl + newYorkCityLocation[0] + "&lon=" + newYorkCityLocation[1] + "&appid=" + apiKey + "&units=imperial"; //Creates new url for api call that implements the required parameters.
    console.log(newUrl);
    buttonData(newUrl, cityName);
});

losAngelesBtnEl.addEventListener('click', function() {
    let cityName = "Los Angeles"
    let newUrl = requestUrl + losAngelesLocation[0] + "&lon=" + losAngelesLocation[1] + "&appid=" + apiKey + "&units=imperial"; //Creates new url for api call that implements the required parameters.
    console.log(newUrl);
    buttonData(newUrl, cityName);
});

houstonBtnEl.addEventListener('click', function() {
    let cityName = "Houston"
    let newUrl = requestUrl + houstonLocation[0] + "&lon=" + houstonLocation[1] + "&appid=" + apiKey + "&units=imperial"; //Creates new url for api call that implements the required parameters.
    console.log(newUrl);
    buttonData(newUrl, cityName);
});

minneapolisBtnEl.addEventListener('click', function() {
    let cityName = "Minneapolis"
    let newUrl = requestUrl + minneapolisLocation[0] + "&lon=" + minneapolisLocation[1] + "&appid=" + apiKey + "&units=imperial"; //Creates new url for api call that implements the required parameters.
    console.log(newUrl);
    buttonData(newUrl, cityName);
});

miamiBtnEl.addEventListener('click', function() {
    let cityName = "Miami"
    let newUrl = requestUrl + miamiLocation[0] + "&lon=" + miamiLocation[1] + "&appid=" + apiKey + "&units=imperial"; //Creates new url for api call that implements the required parameters.
    console.log(newUrl);
    buttonData(newUrl, cityName);
});

charlotteBtnEl.addEventListener('click', function() {
    let cityName = "Charlotte"
    let newUrl = requestUrl + charlotteLocation[0] + "&lon=" + charlotteLocation[1] + "&appid=" + apiKey + "&units=imperial"; //Creates new url for api call that implements the required parameters.
    console.log(newUrl);
    buttonData(newUrl, cityName);
});

bostonBtnEl.addEventListener('click', function() {
    let cityName = "Boston"
    let newUrl = requestUrl + bostonLocation[0] + "&lon=" + bostonLocation[1] + "&appid=" + apiKey + "&units=imperial"; //Creates new url for api call that implements the required parameters.
    console.log(newUrl);
    buttonData(newUrl, cityName);
});

sanFranciscoBtnEl.addEventListener('click', function() {
    let cityName = "San Francisco"
    let newUrl = requestUrl + sanFranciscoLocation[0] + "&lon=" + sanFranciscoLocation[1] + "&appid=" + apiKey + "&units=imperial"; //Creates new url for api call that implements the required parameters.
    console.log(newUrl);
    buttonData(newUrl, cityName);
});



var requestUrl2 = "https://api.openweathermap.org/geo/1.0/direct?q="
//Base url for the api that determines the latitude and longitude of the users inputed location. 

document.getElementById("submit-btn").onclick = function() {
    var selectedCity = document.getElementById("city-search").value;
    console.log(selectedCity);
    //localStorage.setItem("Previous search", selectedCity);
    let newUrl = requestUrl2 + selectedCity + "&limit=5&appid=" + apiKey; //New url with our neccesary parameters.1
    console.log(newUrl);
    fetch(newUrl) //Fetch request that finds the latitude and longitude of the users selected city to use as the parameters in the weather api. 
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            console.log(data);
            console.log(data[0].lat);
            console.log(data[0].lon);
            document.querySelector("#today h2").innerHTML = selectedCity + " " + month + "/" + today + "/" + year; //Populates location field.
            function getWeather() { //Function that takes in the data from the last api and runs it through the next api to determine the weather. 
                let finalUrl = requestUrl + data[0].lat + "&lon=" + data[0].lon + "&appid=" + apiKey + "&units=imperial";
                console.log(finalUrl);
                fetch(finalUrl)
                    .then(function(response){
                        return response.json();
                    })
                    .then(function(data){
                        console.log(data);
                        console.log(data.current.temp);
                        document.getElementById("current-temp").innerHTML = "Temperature: " + data.current.temp + "°F"
                        document.getElementById("current-wind").innerHTML = "Wind speed: " + data.current.wind_speed + "MPH";
                        document.getElementById("current-humidity").innerHTML = "Humidity: " + data.current.humidity + "%";
                        document.getElementById("current-uvi").innerHTML = "UV index: " + data.current.uvi; 
                        if (data.current.uvi <= 2) {
                            document.getElementById("current-uvi").style.backgroundColor = "green";
                        }  else if ((data.current.uvi > 2) && (data.current.uvi < 7)) {
                            document.getElementById("current-uvi").style.backgroundColor = "yellow";
                        } else if (data.current.uvi >= 7) {
                            document.getElementById("current-uvi").style.backgroundColor = "red";
                        }
                        document.getElementById("day1-temp").innerHTML = "Temperature: " + data.daily[1].temp.max + "°F";
                        document.getElementById("day1-wind").innerHTML = "Wind speed: " + data.daily[1].wind_speed + "MPH";
                        document.getElementById("day1-humidity").innerHTML = "Humidity: " + data.daily[1].humidity + "%";
                        document.getElementById("day2-temp").innerHTML = "Temperature: " + data.daily[2].temp.max + "°F";
                        document.getElementById("day2-wind").innerHTML = "Wind speed: " + data.daily[2].wind_speed + "MPH";
                        document.getElementById("day2-humidity").innerHTML = "Humidity: " + data.daily[2].humidity + "%";
                        document.getElementById("day3-temp").innerHTML = "Temperature: " + data.daily[3].temp.max + "°F";
                        document.getElementById("day3-wind").innerHTML = "Wind speed: " + data.daily[3].wind_speed + "MPH";
                        document.getElementById("day3-humidity").innerHTML = "Humidity: " + data.daily[3].humidity + "%";
                        document.getElementById("day4-temp").innerHTML = "Temperature: " + data.daily[4].temp.max + "°F";
                        document.getElementById("day4-wind").innerHTML = "Wind speed: " + data.daily[4].wind_speed + "MPH";
                        document.getElementById("day4-humidity").innerHTML = "Humidity: " + data.daily[4].humidity + "%";
                        document.getElementById("day5-temp").innerHTML = "Temperature: " + data.daily[5].temp.max + "°F";
                        document.getElementById("day5-wind").innerHTML = "Wind speed: " + data.daily[5].wind_speed + "MPH";
                        document.getElementById("day5-humidity").innerHTML = "Humidity: " + data.daily[5].humidity + "%";
                    })
            }
            getWeather();
        })
}     