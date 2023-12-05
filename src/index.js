import './style.css';

import { renderAbout } from './about';
import { renderHome } from './home';
import { renderMenu } from './menu';
import { renderNav } from './navbar';
import { renderFooter } from './footer';

import Icon from './icon.png';
import Back from './background.jpg';

const content = document.getElementById("content");

function createComponent(type, id, myClass, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (myClass) element.classList.add(myClass);
  if (content) element.innerText = content;
  return element;
}

function changeTab(newTab){
    content.innerHTML = "";
    renderNav();
    switch (newTab) {
        case 'HOME':
            renderHome();
            break;
        case 'MENU':
            renderMenu();
            break;
        case 'ABOUT':
            renderAbout();
            break;
    }
    renderFooter();
}
renderNav();
renderHome();
renderFooter();
document.addEventListener("click", (e) => {
  const target = e.target.innerText;
  changeTab(target); /*HOME MENU ABOUT*/
});

export {content, createComponent };