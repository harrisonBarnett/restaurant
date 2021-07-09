import {swapTab} from './lib.js';

function displayHome() {
    const content = document.getElementById('content');
    const currentPage = document.querySelector('.page-container');

    if(currentPage) {
        content.removeChild(currentPage);
    }

    swapTab('home');
    
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('home-page-container');
    pageContainer.classList.add('page-container');

    const heroImg = document.createElement('div');
    heroImg.classList.add('hero-img');
    pageContainer.appendChild(heroImg);
    const heroAccent = document.createElement('div');
    heroAccent.classList.add('hero-img-accent');
    pageContainer.appendChild(heroAccent);

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    const aboutText = document.createElement('p');
    aboutText.classList.add('about-text');
    aboutText.innerHTML = 
        'Lectus magna fringilla urna, porttitor rhoncus dolor purus non enim. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit'+
        ' ut aliquam, purus sit amet luctus venenatis, lectus magna '+
        'fringilla urna, porttitor rhoncus dolor purus non <span id="accent-word">enim.</span>';
    aboutContainer.appendChild(aboutText);
    pageContainer.appendChild(aboutContainer);
    const aboutImg = document.createElement('div');
    aboutImg.classList.add('about-img');
    aboutContainer.appendChild(aboutImg);
    pageContainer.appendChild(aboutContainer);

    const bottomText = document.createElement('p');
    bottomText.classList.add('home-bottom-text');
    bottomText.innerHTML = 'come and gather.';
    pageContainer.appendChild(bottomText);

    content.appendChild(pageContainer);
}

export {displayHome};