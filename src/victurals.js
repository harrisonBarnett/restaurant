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

    const row1 = document.createElement('div');
    row1.classList.add('menu-row');

    let item = document.createElement('p');
    item.innerHTML = 'beef tartare';
    item.classList.add('menu-item');
    let spacer = document.createElement('div');
    spacer.classList.add('menu-item-spacer');
    item.classList.add('menu-item');
    let price = document.createElement('p');
    price.innerHTML = '$12';
    price.classList.add('menu-item');
    row1.appendChild(item);
    row1.appendChild(spacer);
    row1.appendChild(price);

    farmMenu.appendChild(row1);

    return farmMenu;
}

export {tabVicturals};