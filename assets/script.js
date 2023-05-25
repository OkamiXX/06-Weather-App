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
function checkWeather(cityHistory) {
    //sets the city to whatever the user enters on the search bar.
    var info = document.querySelector('.inp');
    var city = info.value;

    if (cityHistory) {
        city = cityHistory
    }
    

    //API key to use later on.
    const apiKey = '0bb5085a35133745887f3b15ab95640f';

    //API URL to start fetch and then retrieve all the information needed for the 5 day forecast.
    var apiURL = ['https://api.openweathermap.org/data/2.5/forecast?q=' , 'san%20antonio' , '&appid=' , '&units=metric'];

    //API URL to start fetch and then retrieve all the information needed for the current weather.
    var apiURLCurrent = ['https://api.openweathermap.org/data/2.5/weather?q=' , 'san%20antonio' , '&appid=' , '&units=metric']

    
    //sets the city on the URL to the variable 'city'(user input).
    apiURL[1] = city;

    //fetch the URL looking for the current weather info to then display it.
    fetch(apiURLCurrent[0] + apiURL[1] + apiURL[2] + apiKey + apiURL[3]) 
    //translation.
    .then(response => response.json())
    //retrieving
    .then(data =>  {
        console.log(data)

        displayWeather(city, data);
        
    
    } );

    //fetch the URL looking for the weather of 5 days info to then display it.
    fetch(apiURL[0] + apiURL[1] + apiURL[2] + apiKey + apiURL[3]) 
    //translation.
    .then(response => response.json())
    //retrieving
    .then(data =>  {
        console.log(data)

        displayWeatherForecast(city, data);
    
    } );}

    function displayWeather(city, data) {
        //changes the weather picture
        var image = document.querySelector('.weather-pic');
       checkWeatherPictureOG(data, image);
 

        //changes the temperature.
        var clima = document.querySelector('#temp11');
        clima.innerHTML = Math.round(data.main.temp);

        //changes the city name
        var ciudad = document.querySelector('.city');
        ciudad.innerHTML = data.name;

        //changes the wind speed
        var windP = document.querySelector('#wind-percent');
        windP.innerHTML = data.wind.speed + ' km/h';

        //changes the humidity
        var humidityP = document.querySelector('#humidity-percent');
        humidityP.innerHTML = data.main.humidity + '%';

    };

    // Function to display the forecast of five days of the proviaded city.
    function displayWeatherForecast(city, data) {

        ////////////////////////////////////////////////////////////////////////////////
        // Day 1
        ////////////////////////////////////////////////////////////////////////////////
        //changes the weather pic.
        checkWeatherPicture(0, 1, data);

         //changes the temperature.
        var clima1 = document.querySelector('#temp1');
        clima1.innerHTML = Math.round(data.list[0].main.temp);
     
        //changes the date
        var dia1 = document.querySelector('.date1');
        dia1.innerHTML = data.list[0].dt_txt.split(' ')[0];
     
        //changes the wind speed
        var windP = document.querySelector('#wind-percent1');
        windP.innerHTML = data.list[0].wind.speed + ' km/h';
     
        //changes the humidity
        var humidityP = document.querySelector('#humidity-percent1');
        humidityP.innerHTML = data.list[0].main.humidity + '%';  
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        // Day 2
        ////////////////////////////////////////////////////////////////////////////////
        //changes the weather pic.
        checkWeatherPicture(6, 2, data);

         //changes the temperature.
        var clima2 = document.querySelector('#temp2');
        clima2.innerHTML = Math.round(data.list[6].main.temp);
     
        //changes the date
        var dia2 = document.querySelector('.date2');
        dia2.innerHTML = data.list[6].dt_txt.split(' ')[0];
     
        //changes the wind speed
        var windP2 = document.querySelector('#wind-percent2');
        windP2.innerHTML = data.list[6].wind.speed + ' km/h';
     
        //changes the humidity
        var humidityP2 = document.querySelector('#humidity-percent2');
        humidityP2.innerHTML = data.list[6].main.humidity + '%';  
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        // Day 3
        ////////////////////////////////////////////////////////////////////////////////
        //changes the weather pic.
        checkWeatherPicture(14, 3, data);

         //changes the temperature.
        var clima3 = document.querySelector('#temp3');
        clima3.innerHTML = Math.round(data.list[14].main.temp);
     
        //changes the date
        var dia3 = document.querySelector('.date3');
        dia3.innerHTML = data.list[14].dt_txt.split(' ')[0];
     
        //changes the wind speed
        var windP3 = document.querySelector('#wind-percent3');
        windP3.innerHTML = data.list[14].wind.speed + ' km/h';
     
        //changes the humidity
        var humidityP3 = document.querySelector('#humidity-percent3');
        humidityP3.innerHTML = data.list[14].main.humidity + '%';  
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        // Day 4
        ////////////////////////////////////////////////////////////////////////////////
        //changes the weather pic.
        checkWeatherPicture(22, 4, data);

         //changes the temperature.
        var clima4 = document.querySelector('#temp4');
        clima4.innerHTML = Math.round(data.list[22].main.temp);
     
        //changes the date
        var dia4 = document.querySelector('.date4');
        dia4.innerHTML = data.list[22].dt_txt.split(' ')[0];
     
        //changes the wind speed
        var windP4 = document.querySelector('#wind-percent4');
        windP4.innerHTML = data.list[22].wind.speed + ' km/h';
     
        //changes the humidity
        var humidityP4 = document.querySelector('#humidity-percent4');
        humidityP4.innerHTML = data.list[22].main.humidity + '%';  
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        // Day 5
        ////////////////////////////////////////////////////////////////////////////////
        //changes the weather pic.
        checkWeatherPicture(30, 5, data);

         //changes the temperature.
        var clima5 = document.querySelector('#temp5');
        clima5.innerHTML = Math.round(data.list[30].main.temp);
     
        //changes the date
        var dia5 = document.querySelector('.date5');
        dia5.innerHTML = data.list[30].dt_txt.split(' ')[0];
     
        //changes the wind speed
        var windP5 = document.querySelector('#wind-percent5');
        windP5.innerHTML = data.list[30].wind.speed + ' km/h';
     
        //changes the humidity
        var humidityP5 = document.querySelector('#humidity-percent5');
        humidityP5.innerHTML = data.list[30].main.humidity + '%';  
        ////////////////////////////////////////////////////////////////////////////////
    }

    // Function to check the weather and then display the corresponding picture on current weather.
    function checkWeatherPictureOG(data , image) {
        image.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    }

    // Function to check the weather and then display the corresponding picture on forecast.
    function checkWeatherPicture(num, listNum, data) {
               //changes the weather picture
               var image = document.querySelector('.weather-pic' + listNum);
               image.src = "https://openweathermap.org/img/wn/" + data.list[num].weather[0].icon + "@2x.png";
               condition = document.querySelector('#current-condition' + listNum);

               condition.innerHTML = '';
               condition.append(data.list[num].weather[0].description);
    }



    //////////////////////////////////////////////////////////////
    // Defines the searchHistory variable to get all local storage items.
     var searchHistory = JSON.parse(localStorage.getItem("Search History: ")) || [];


     // Function to get the search history of the user.
    function getHistory() {
        // Defines the info variable to get the inp Element for the content the user inputs.
        // Asign the value to city variable.
        var info = document.querySelector('.inp');
        var city = info.value;

        console.log(city);

        
        searchHistory.push(city);
        localStorage.setItem("Search History: ", JSON.stringify(searchHistory));
        //////////////////////////////////////////////////////////////
        renderHistory();
    }

    // Defines the historyEl variable to get the #historyBar Element.
    var historyEl = document.querySelector('#historyBar');
    var historyEl2 = document.querySelector('#history');

    // Defines the clearHistoryEl variable to get the #clear-history Element.
    var clearHistoryEl = document.querySelector('#historyBar');

    // Defines the cityHistoryBtn variable to get the #city-history Element.
    var cityHistoryBtn = document.querySelector('#history');

    // Clear all the history buttons
    clearHistoryEl.addEventListener('click', function() {
        localStorage.clear();
        searchHistory = [];
        renderHistory();



    })

    // Function to render the user search history and then append a button element to the html.
    function renderHistory() {
        historyEl2.innerHTML = "";
        for (var i = 0; i < searchHistory.length; i++) {
            let historyElement = document.createElement("button");
            historyElement.setAttribute('class', 'city-history');
            historyElement.innerHTML = searchHistory[i];
            historyEl2.appendChild(historyElement);
        }
    }

    // Add an event listener for when the search history is dynamicaly displayed.
    // After the user clicks on one of the desired buttons then the app will check the weather
    // of that desired loacation inside the search history.
    cityHistoryBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        console.log(e.target.innerHTML)
        var chosenOne = e.target.innerHTML;
        checkWeather(chosenOne);

    })



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// Execution ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Gets the search button element.
var searchBtn = document.querySelector('.search');

// Event listener when the user clicks the search btn and then the weather displays.
searchBtn.addEventListener('click', () => {
    var contenedor = document.querySelector('.container-fluid');
    contenedor.style.display = 'block';

    historyEl.style.display = 'block';

    checkWeather();
    getHistory();
    renderHistory();
})

// Executes the timer.
timer();