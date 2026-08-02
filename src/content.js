import { home } from './home.js';
import { menu } from './menu.js';
import { about } from './about.js';
export function displayPageContent() {

    const content = document.querySelector('#content');

    content.appendChild(home());

    const homeBtn = document.querySelector('#home');
    const menuBtn = document.querySelector('#menu');
    const aboutBtn = document.querySelector('#about');

    function clearContent() {
        while (content.lastChild) {
            content.removeChild(content.lastChild);
        }
    }

    homeBtn.addEventListener('click', () => {
        clearContent();
        content.appendChild(home());

    });
    menuBtn.addEventListener('click', () => {
        clearContent();

        content.appendChild(menu());
    });
    aboutBtn.addEventListener('click', () => {
        clearContent();
        content.appendChild(about());

    });
}

