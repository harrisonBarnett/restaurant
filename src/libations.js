import { swapTab, createItem } from "./lib";

function displayLibations() {
    const content = document.getElementById('content');
    const currentPage = document.querySelector('.page-container');

    if(currentPage) {
        content.removeChild(currentPage);
    }

    swapTab('libations');

    const pageContainer = document.createElement('div');
    pageContainer.classList.add('libations-page-container');
    pageContainer.classList.add('page-container');
    // page header
    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    const menuTitle = document.createElement('h2');
    menuTitle.classList.add('menu-title');
    menuTitle.innerHTML = "from the counter";
    menuHeader.appendChild(menuTitle);
    pageContainer.appendChild(menuHeader);
    const menuHeaderAccent = document.createElement('div');
    menuHeaderAccent.classList.add('menu-header-accent');
    pageContainer.appendChild(menuHeaderAccent);

    const heroImg = document.createElement('div');
    heroImg.classList.add('menu-img');
    heroImg.classList.add('drink-menu-img');
    pageContainer.appendChild(heroImg);
    const heroAccent = document.createElement('div');
    heroAccent.classList.add('menu-img-accent');
    pageContainer.appendChild(heroAccent);

    // append menuItems() to the document
    pageContainer.appendChild(menuItems());

    content.appendChild(pageContainer);
}

// add all of your menu items here
function menuItems() {
    const farmMenu = document.createElement('div');
    farmMenu.classList.add('menu');
   
    farmMenu.appendChild(createItem(
        'grog blossom', 
        '$14',
        'adipiscing elit duis tristique sollicitudin nibh sit amet'));
    farmMenu.appendChild(createItem(
        'la vie en rose', 
        '$13',
        'massa tempor nec feugiat nisl pretium fusce id'));
    farmMenu.appendChild(createItem(
        'italian american', 
        '$15',
        'pellentesque dignissim enim sit amet venenatis urna cursus'));
    farmMenu.appendChild(createItem(
        "quint's revenge", 
        '$13',
        'id nibh tortor id aliquet lectus proin nibh'));
    farmMenu.appendChild(createItem(
        'bonnie & clyde', 
        '$12',
        'odio aenean sed adipiscing diam donec adipiscing tristique'));
    farmMenu.appendChild(createItem(
        'whiskey sour', 
        '$10',
        'ultricies integer quis auctor elit sed vulputate mi'));
    farmMenu.appendChild(createItem(
        'aperol spritz', 
        '$12',
        'egestas pretium aenean pharetra magna ac placerat vestibulum'));

    return farmMenu;
}

export {displayLibations};