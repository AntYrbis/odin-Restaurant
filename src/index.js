import './style.css';

import myName from './myName';
import renderAbout from './about';
import renderHome from './home';
import renderMenu from './menu';

import Icon from './icon.png';
import Back from './background.jpg';

const content = document.getElementById("content");

function component() {
  const element = document.createElement('div');

  // use your function!
  element.textContent = myName('Cody');
  return element;
}

function changeTab(newTab){
    content.innerHTML = "";
    renderNav();
    switch (newTab) {
        case HOME:
            renderHome();
            break;
        case MENU:
            renderMenu();
            break;
        case ABOUT:
            renderAbout();
            break;
    }
    renderFooter();
}

home();
document.addEventListener("click", (e) => {
  const target = e.target.innerText;
  changeTab(target); /*HOME MENU ABOUT*/
});

export {content};