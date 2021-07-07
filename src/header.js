import { displayHome } from "./home";
import { displayVicturals } from "./victurals";

function tabs() {
    const tabs = document.createElement('div');
    tabs.classList.add('tabs-container');

    const list = document.createElement('ul');
    list.classList.add('tabs');
    const home = document.createElement('li');
    home.innerHTML = '<a href=#>home</a>';
    home.id = 'home-tab';
    home.onclick = function() {displayHome()};
    list.appendChild(home);
    const victurals = document.createElement('li');
    victurals.innerHTML = '<a href=#>victurals</a>';
    victurals.id = 'victurals-tab';
    victurals.onclick = function() {displayVicturals()};
    list.appendChild(victurals);
    const libations = document.createElement('li');
    libations.innerHTML = '<a href=#>libations</a>';
    libations.id = 'libations-tab';
    list.appendChild(libations);
    const contact = document.createElement('li');
    contact.innerHTML = '<a href=#>contact</a>';
    contact.id = 'contact-tab';
    list.appendChild(contact);

    tabs.appendChild(list);

    return tabs;
}

function header() {
    const header = document.createElement('div');
    header.classList.add('header');

    const titleBox = document.createElement('div');
    titleBox.classList.add('title-container');
    const title = document.createElement('h1');
    title.innerHTML = 'THE RESTAURANT';
    title.classList.add('title');
    const subtitle = document.createElement('p');
    subtitle.innerHTML = 'est. 2021';
    subtitle.classList.add('subtitle');

    titleBox.appendChild(title);
    titleBox.appendChild(subtitle);
    header.appendChild(titleBox);
    return header;
}

function footer() {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const footerText = document.createElement('p');
    footerText.classList.add('footer-text');
    footerText.innerHTML = 'copyright 2021 the restaurant inc.';
    footer.appendChild(footerText);

    const footerList = document.createElement('ul');
    footerList.classList.add('footer-icons');
    const instagram = document.createElement('a');
    instagram.classList.add('footer-icon');
    instagram.href = '#';
    instagram.innerHTML = '<img src="/static/images/social-icons/instagram.svg">';
    footerList.appendChild(instagram);
    const twitter = document.createElement('div');
    twitter.classList.add('footer-icon');
    twitter.innerHTML = '<a href="#"><img src="/static/images/social-icons/twitter.svg"></a>';
    footerList.appendChild(twitter);
    const facebook = document.createElement('div');
    facebook.classList.add('footer-icon');
    facebook.innerHTML = '<a href="#"><img src="/static/images/social-icons/facebook.svg"></a>';
    footerList.appendChild(facebook);

    footer.appendChild(footerList);

    return footer;
}

export {header, tabs, footer};