function buildPage() {
    const content = document.getElementById('content');
    const currentPage = document.querySelector('.page-container');

    if(currentPage) {
        content.removeChild(currentPage);
    }

    const pageContainer = document.createElement('div');
    pageContainer.classList.add('victurals-page-container');
    pageContainer.classList.add('page-container');
    // farm menu
    const farmSection = document.createElement('div');
    farmSection.classList.add('farm-section');
    const farmHeader = document.createElement('div');
    farmHeader.classList.add('farm-header');
    const farmTitle = document.createElement('h2');
    farmTitle.classList.add('farm-title');
    farmTitle.innerHTML = "from the farm";
    farmHeader.appendChild(farmTitle);
    farmSection.appendChild(farmHeader);
    const farmHeaderAccent = document.createElement('div');
    farmHeaderAccent.classList.add('farm-header-accent');
    farmSection.appendChild(farmHeaderAccent);

    farmSection.appendChild(menuItems());

    pageContainer.appendChild(farmSection);
    content.appendChild(pageContainer);
}

function tabVicturals() {
    const content = document.getElementById('content');
    // swap tabs
    const tab = document.getElementById('victurals-tab');

    const activeTab = document.querySelector('.tab-active');
    if(!activeTab) {
        tab.classList.add('tab-active');
    } else {
    activeTab.classList.remove('tab-active');
    tab.classList.add('tab-active');
    }

    buildPage();
}

function menuItems() {
    const farmMenu = document.createElement('div');
    farmMenu.classList.add('farm-menu');

    function createItem(x, y) {
        const row = document.createElement('div');
        row.classList.add('menu-row');

        const spacer = document.createElement('div');
        spacer.classList.add('menu-item-spacer');

        const item = document.createElement('p');
        item.classList.add('menu-item');
        item.innerHTML = x;

        const price = document.createElement('p');
        price.classList.add('menu-item');
        price.innerHTML = y;

        row.appendChild(item);
        row.appendChild(spacer);
        row.appendChild(price);

        return row;
    }


    
    farmMenu.appendChild(createItem('beef tartare', '$14'));
    farmMenu.appendChild(createItem('mussels provencale', '$20'));
    farmMenu.appendChild(createItem('scallops', '$18'));
    farmMenu.appendChild(createItem('flemish onion soup', '$10'));
    farmMenu.appendChild(createItem('braised short ribs', '$22'));
    farmMenu.appendChild(createItem('wedge salad', '$10'));
    farmMenu.appendChild(createItem('charcuterie', '$16'));

    return farmMenu;
}

export {tabVicturals};