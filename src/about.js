import content from './index';

function createAbout(){
    const element = document.createElement('div');
    return element;
};

function renderAbout(){
    element = createAbout();
    content.appendChild(element);
};
  export {renderAbout};