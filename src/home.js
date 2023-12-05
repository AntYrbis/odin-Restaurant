import content from './index';

function createHome(){
    const element = document.createElement('div');
    return element;
};

function renderHome(){
    element = createHome();
    content.appendChild(element);
};

  export {renderHome};