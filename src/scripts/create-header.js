import {appendForm} from "./add-form.js"

const body = document.querySelector('body');

function createHeader(){
    const header = document.createElement('header');
    header.setAttribute('id', 'just-header');

    const head = document.createElement('h1');
    head.textContent = "Weather Forecast";

    header.appendChild(head);

    body.appendChild(header);

    appendForm();
    
}

export {createHeader};