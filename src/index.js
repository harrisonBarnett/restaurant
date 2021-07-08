const content = document.getElementById('content');

import {header, tabs, footer} from './header.js';
import {tabHome} from './home.js';

content.appendChild(header());
content.appendChild(tabs());
document.body.appendChild(footer());
tabHome();
