///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// Functions ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to display what time is it currently on the website.
function timer() {
    // targets the time.
    var timez = document.querySelector('.time');
    //format for the time
    var currentTime = dayjs().format('h:mm A');
    timez.textContent = currentTime;
    //interval to make it update every second.
    setInterval(timer, 1000);
};


// Function to go and check the weather depending on what city the user asks for.
function checkWeather() {
    //sets the city to whatever the user enters on the search bar.
    var info = document.querySelector('.inp');
    var city = info.value;

    //API key to use later on.
    const apiKey = '0bb5085a35133745887f3b15ab95640f';

    //API URL to start fetch and then retrieve all the information needed.
    var apiURL = ['https://api.openweathermap.org/data/2.5/forecast?q=' , 'san%20antonio' , '&appid=' , '&units=metric'];
    
    //sets the city on the URL to the variable 'city'(user input).
    apiURL[1] = city;


    //fetch the URL looking for the weather info to then display it.
    fetch(apiURL[0] + apiURL[1] + apiURL[2] + apiKey + apiURL[3]) 
    //translation.
    .then(response => response.json())
    //retrieving
    .then(data =>  {
        console.log(data)

        displayWeather(city, data);
        displayWeatherForecast(city, data);
    
    } );}

    function displayWeather(city, data) {
        //changes the temperature.
        var clima = document.querySelector('#temp11');
        clima.innerHTML = Math.round(data.list[0].main.temp);

        //changes the city name
        var ciudad = document.querySelector('.city');
        ciudad.innerHTML = city;

        //changes the wind speed
        var windP = document.querySelector('#wind-percent');
        windP.innerHTML = data.list[0].wind.speed + ' km/h';

        //changes the humidity
        var humidityP = document.querySelector('#humidity-percent');
        humidityP.innerHTML = data.list[0].main.humidity + '%';

    };

    function displayWeatherForecast(city, data) {
         //changes the temperature.
        var clima1 = document.querySelector('#temp1');
        clima1.innerHTML = Math.round(data.list[1].main.temp);
     
        //changes the city name
        var ciudad = document.querySelector('.city1');
        ciudad.innerHTML = city;
     
        //changes the wind speed
        var windP = document.querySelector('#wind-percent1');
        windP.innerHTML = data.list[1].wind.speed + ' km/h';
     
        //changes the humidity
        var humidityP = document.querySelector('#humidity-percent1');
        humidityP.innerHTML = data.list[1].main.humidity + '%';   
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// Execution ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Event listener when the user clicks the search btn and then the weather displays.
var searchBtn = document.querySelector('.search');
searchBtn.addEventListener('click', () => {
    var contenedor = document.querySelector('.container-fluid');
    contenedor.style.display = 'block';

    checkWeather();
   
})

timer();