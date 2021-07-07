function buildPage() {
    const content = document.getElementById('content');
    const currentPage = document.querySelector('.page-container');

    if(currentPage) {
        content.removeChild(currentPage);
    }

    const pageContainer = document.createElement('div');
    pageContainer.classList.add('victurals-page-container');
    pageContainer.innerText = "victurals";


    content.appendChild(pageContainer);
}

function displayVicturals() {
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

export {displayVicturals};