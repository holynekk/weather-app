import {fetchData} from "./fetch-data.js"
import {createWeatherCard} from "./create-container.js"

function searchButton(){
    const form = document.querySelector('form');
    const input = document.querySelector('input');

    form.addEventListener('submit', async (event)=>{
        event.preventDefault();
        let inputValue = input.value.toLocaleUpperCase();
        input.value = '';
        inputValue.replace(/_/g, "+");

        let inputData = await fetchData(inputValue);
        createWeatherCard(inputData);

    });
}


export {searchButton};