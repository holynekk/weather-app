

async function fetchData(cityName){
    let apiKey = "3960a7657494fab206ec2f3d86090e6f"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    let data = await fetch(url);
    let processedData = await data.json();

    return processedData;
}


export {fetchData};