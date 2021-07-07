const content = document.getElementById('content');

import {header, tabs, footer} from './header.js';
import {displayHome} from './home.js';

content.appendChild(header());
content.appendChild(tabs());
content.appendChild(footer());
displayHome();
