const content = document.getElementById('content');
const title = document.createElement('h1');
title.innerText = "HELLO RESTAURANT";
content.appendChild(title);

const displaySite = require('./displaySite');

const box = displaySite.box();
content.appendChild(box);

