import { content, createComponent } from './index';

function createAbout(){
    const element = createComponent("div", null, 'main', null);
    return element;
};

function renderAbout(){
    const element = createAbout();
    content.appendChild(element);
};
  export {renderAbout};