function buildPage() {
    const content = document.getElementById('content');
    const currentPage = document.querySelector('.page-container');

    if(currentPage) {
        content.removeChild(currentPage);
    }

    const pageContainer = document.createElement('div');
    pageContainer.classList.add('home-page-container');
    const heroImg = document.createElement('div');
    heroImg.classList.add('hero-img');
    pageContainer.appendChild(heroImg);


    content.appendChild(pageContainer);
}

function displayHome() {
    const content = document.getElementById('content');
    // swap tabs
    const tab = document.getElementById('home-tab');

    const activeTab = document.querySelector('.tab-active');
    if(!activeTab) {
        tab.classList.add('tab-active');
    } else {
    activeTab.classList.remove('tab-active');
    tab.classList.add('tab-active');
    }

    buildPage();
}


export {displayHome};