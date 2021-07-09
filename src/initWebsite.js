import {header, tabs, footer} from './lib.js';
import {displayHome} from './home.js';

function initWebsite() {


const content = document.getElementById('content');

    content.appendChild(header());
    content.appendChild(tabs());
    content.appendChild(footer());

    displayHome();

}

export {initWebsite}