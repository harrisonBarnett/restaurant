import { swapTab } from "./lib";

function displayContact() {
    const content = document.getElementById('content');
    const currentPage = document.querySelector('.page-container');

    if(currentPage) {
        content.removeChild(currentPage);
    }

    swapTab('contact');

    const pageContainer = document.createElement('div');
    pageContainer.classList.add('contact-page-container');
    pageContainer.classList.add('page-container');
    // page header
    const contactHeader = document.createElement('div');
    contactHeader.classList.add('menu-header');
    const contactTitle = document.createElement('h2');
    contactTitle.classList.add('menu-title');
    contactTitle.innerHTML = "drop us a line";
    contactHeader.appendChild(contactTitle);
    pageContainer.appendChild(contactHeader);
    const contactHeaderAccent = document.createElement('div');
    contactHeaderAccent.classList.add('contact-header-accent');
    pageContainer.appendChild(contactHeaderAccent);

    const contactBox = document.createElement('div');
    contactBox.classList.add('contact-container');

    const address = document.createElement('p');
    address.classList.add('contact-info');
    address.innerHTML = 'location<br>4135 foley street<br>'+
        'deerfield beach, FL, 3344';
    const phone = document.createElement('p');
    phone.classList.add('contact-info');
    phone.innerHTML = 'phone<br>(954)-659-2781';
    const fax = document.createElement('p');
    fax.classList.add('contact-info');
    fax.innerHTML = 'fax<br>(954)-659-2782';
    const email = document.createElement('p');
    email.classList.add('contact-info');
    email.innerHTML = 'email<br>contact@therestaurant.com';

    contactBox.appendChild(address);
    contactBox.appendChild(phone);
    contactBox.appendChild(fax);
    contactBox.appendChild(email);

    pageContainer.appendChild(contactBox);

    content.appendChild(pageContainer);
}


export {displayContact};