var searchBtn = document.querySelector('.search');
var info = document.querySelector('.container');
var timez = document.querySelector('.time');

function timer() {
    var currentTime = dayjs().format('h:mm A');
    timez.textContent = currentTime;
};

timer();
setInterval(timer, 1000);


searchBtn.addEventListener('click', () => {
    info.style.display = 'block';

    const apiKey = '0bb5085a35133745887f3b15ab95640f';

    var apiURL = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';

   

})

