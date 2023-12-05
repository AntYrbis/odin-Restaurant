import { content, createComponent } from './index';

function createHome(){
    const element = createComponent("div", null, 'main', null);

    const message = createComponent("div", null, 'main-text', 'Découvrez nos saveurs!')
    element.appendChild(message);
    
    return element;
};

function renderHome(){
    const element = createHome();
    content.appendChild(element);
};

  export {renderHome};