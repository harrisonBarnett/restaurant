const content = document.getElementById('content');

import {header, tabs} from './header.js';
import {displayHome} from './home.js';

content.appendChild(header());
content.appendChild(tabs());
displayHome();
