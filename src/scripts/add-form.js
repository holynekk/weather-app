

function appendForm(){
    const header = document.querySelector('header');

    const form = document.createElement('form');
    
    const text = document.createElement('input');
    text.setAttribute('id', 'input-field');
    text.setAttribute('type', 'text');
    text.setAttribute('name', 'city');
    text.setAttribute('for', 'city');
    text.setAttribute('placeholder', 'Name of the city');
    text.setAttribute('pattern', '[a-zA-z]*');

    const label = document.createElement('label');
    label.setAttribute('id', 'input-label'); 
    label.textContent = "Enter name of the city";

    form.appendChild(text);
    
    const button = document.createElement('button');
    button.textContent = "Search";
    button.setAttribute('id', 'submit');

    form.appendChild(button);

    header.appendChild(form);
}


export {appendForm};