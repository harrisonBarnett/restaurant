import { swapTab, createItem } from "./lib";

function displayVicturals() {
    const content = document.getElementById('content');
    const currentPage = document.querySelector('.page-container');

    if(currentPage) {
        content.removeChild(currentPage);
    }

    swapTab('victurals');

    const pageContainer = document.createElement('div');
    pageContainer.classList.add('victurals-page-container');
    pageContainer.classList.add('page-container');
    // page header
    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    const farmTitle = document.createElement('h2');
    farmTitle.classList.add('menu-title');
    farmTitle.innerHTML = "from the farm";
    menuHeader.appendChild(farmTitle);
    pageContainer.appendChild(menuHeader);
    const menuHeaderAccent = document.createElement('div');
    menuHeaderAccent.classList.add('menu-header-accent');
    pageContainer.appendChild(menuHeaderAccent);

    const heroImg = document.createElement('div');
    heroImg.classList.add('menu-img');
    heroImg.classList.add('farm-menu-img');
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
        'beef tartare', 
        '$14',
        'egestas pretium aenean pharetra magna ac placerat vestibulum'));
    farmMenu.appendChild(createItem(
        'mussels provencale',
        '$20',
        'sed adipiscing diam donec adipiscing tristique risus nec'));
    farmMenu.appendChild(createItem(
        'scallops', 
        '$18',
        'vitae congue mauris rhoncus aenean vel elit scelerisque'));
    farmMenu.appendChild(createItem(
        'flemish onion soup', 
        '$10',
        'elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus'));
    farmMenu.appendChild(createItem(
        'braised short ribs', 
        '$22',
        'sagittis purus sit amet volutpat consequat mauris nunc'));
    farmMenu.appendChild(createItem(
        'wedge salad', 
        '$10',
        'nibh sed pulvinar proin gravida hendrerit lectus a'));
    farmMenu.appendChild(createItem(
        'charcuterie', 
        '$16',
        'non blandit massa enim nec dui nunc mattis'));

    return farmMenu;
}

export {displayVicturals};