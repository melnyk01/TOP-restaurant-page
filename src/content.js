import { header } from './header.js';
import { todaysSpecial } from './todays-special.js';
import { menu } from './menu.js';
export function displayPageContent() {

    const content = document.querySelector('#content');
    const footer = document.createElement('footer');


    content.appendChild(header());
    content.appendChild(todaysSpecial());
    content.appendChild(menu());

    document.body.appendChild(footer);

}

