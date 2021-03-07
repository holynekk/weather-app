

const body = document.querySelector('body');

function getTime(zone){
    const today = new Date();
    const localTime = today.getTime();
    const localOffset = today.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    let answer = utc + (1000 * zone);
    const nd = new Date(answer);

    return nd.getHours()+':'+nd.getMinutes()+":"+nd.getSeconds();
}

function createFirstContainer(){
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    container.textContent = "Search for a city!";
    body.appendChild(container);
}

function createWeatherCard(data){
    const container = document.getElementById('container');
    container.textContent = "";

    const top = document.createElement('div');
    top.setAttribute('id', 'card-top');
    const bottom = document.createElement('div');
    bottom.setAttribute('id', 'card-bottom');

    const cityName = document.createElement('p');
    cityName.setAttribute('id', 'city-name');
    cityName.textContent = data.name + ',' + data.sys.country;
    top.appendChild(cityName);

    const currentTime = document.createElement('p');
    currentTime.setAttribute('id', 'current-time');
    console.log(data.timezone);
    currentTime.textContent = getTime(data.timezone);
    top.appendChild(currentTime);

    const myIcon = new Image();
    myIcon.setAttribute('id', 'weather-image');
    const iconCode = data.weather[0].icon;
    myIcon.src = "./../src/icons/"+iconCode+'.png';
    bottom.appendChild(myIcon);

    console.log(data);

    const temp = document.createElement('p');
    temp.setAttribute('id', 'temp-text');
    temp.textContent = (parseInt(data.main.temp) - 273).toString()+"C°";
    bottom.appendChild(temp);

    const extraData = document.createElement('div');
    extraData.setAttribute('id', 'extra-data');
    

    const feels = document.createElement('div');
    feels.setAttribute('id', 'extras');
    const feelsIcon = new Image();
    feelsIcon.setAttribute('id', 'extra-image');
    feelsIcon.src = "./../src/icons/feels.png";

    let itsText = document.createElement('div');
    itsText.setAttribute('div', 'itstext');
    let a = document.createElement('p');
    a.setAttribute('id', 'inf-top');
    a.textContent = "Feels Like"
    let b = document.createElement('p');
    b.setAttribute('id', 'inf-bottom');
    b.textContent = (parseInt(data.main.feels_like)-273).toString()+" C°";

    itsText.appendChild(a);
    itsText.appendChild(b);
    feels.appendChild(feelsIcon);
    feels.appendChild(itsText);
    extraData.appendChild(feels);



    let txt = document.createElement('div');
    txt.setAttribute('id', 'extras');
    const justWeather = document.createElement('p');
    justWeather.textContent = data.weather["0"].main;
    justWeather.setAttribute('id', 'mid-text');
    txt.appendChild(justWeather);
    extraData.appendChild(txt);



    const humidity = document.createElement('div');
    humidity.setAttribute('id', 'extras');
    const humidityIcon = new Image();
    humidityIcon.setAttribute('id', 'extra-image');
    humidityIcon.src = "./../src/icons/humidity.png";

    itsText = document.createElement('div');
    itsText.setAttribute('div', 'itstext');
    a = document.createElement('p');
    a.setAttribute('id', 'inf-top');
    a.textContent = "Humidity"
    b = document.createElement('p');
    b.setAttribute('id', 'inf-bottom');
    b.textContent = data.main.humidity + " %";

    itsText.appendChild(a);
    itsText.appendChild(b);
    humidity.appendChild(humidityIcon);
    humidity.appendChild(itsText);
    extraData.appendChild(humidity);


    const wind = document.createElement('div');
    wind.setAttribute('id', 'extras');
    const windIcon = new Image();
    windIcon.setAttribute('id', 'extra-image');
    windIcon.src = "./../src/icons/wind.png";

    itsText = document.createElement('div');
    itsText.setAttribute('div', 'itstext');
    a = document.createElement('p');
    a.setAttribute('id', 'inf-top');
    a.textContent = "Wind Speed"
    b = document.createElement('p');
    b.setAttribute('id', 'inf-bottom');
    b.textContent = data.wind.speed + " km/h";

    itsText.appendChild(a);
    itsText.appendChild(b);
    wind.appendChild(windIcon);
    wind.appendChild(itsText);
    extraData.appendChild(wind);


    txt = document.createElement('div');
    txt.setAttribute('id', 'extras');
    txt.textContent = '';
    extraData.appendChild(txt);


    const pressure = document.createElement('div');
    pressure.setAttribute('id', 'extras');
    const pressureIcon = new Image();
    pressureIcon.setAttribute('id', 'extra-image');
    pressureIcon.src = "./../src/icons/pressure.png";

    itsText = document.createElement('div');
    itsText.setAttribute('div', 'itstext');
    a = document.createElement('p');
    a.setAttribute('id', 'inf-top');
    a.textContent = "Pressure";
    b = document.createElement('p');
    b.setAttribute('id', 'inf-bottom');
    b.textContent = data.main.pressure + " mbar";

    itsText.appendChild(a);
    itsText.appendChild(b);
    pressure.appendChild(pressureIcon);
    pressure.appendChild(itsText);
    extraData.appendChild(pressure);




    bottom.appendChild(extraData);
    container.appendChild(top);
    container.appendChild(bottom);
}

export {createFirstContainer, createWeatherCard};