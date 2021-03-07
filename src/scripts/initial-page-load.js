import {createHeader} from "./create-header.js";
import {createFirstContainer} from "./create-container.js";
import {searchButton} from "./search-button.js";


function setup(){
    createHeader();
    createFirstContainer();
    searchButton();
}

export {setup}