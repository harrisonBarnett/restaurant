
function displayVicturals() {
    const content = document.getElementById('content');
    const tab = document.getElementById('victurals-tab');

    const active = document.querySelector('.tab-active');
    if(!active) {
        tab.classList.add('tab-active');
    } else {
    active.classList.remove('tab-active');
    tab.classList.add('tab-active');
        }
}

export {displayVicturals};