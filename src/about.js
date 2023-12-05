import { content, createComponent } from './index';

function createAbout(){
    const element = createComponent("div", null, 'main', null);

    const message = createComponent("div", null, 'main-text', 'More About us...')
    element.appendChild(message);
    const content = createComponent("p", null, 'main-content', 'Lorem ipsum dolor curabitur volutpat nibh eu mi convallis, nec fermentum leo vehicula. Maecenas in est et elit finibus efficitur vel vel orci. Sed congue dui ac dolor pharetra, id tristique elit posuere.');
    message.appendChild(content);
    
    return element;
};

function renderAbout(){
    const element = createAbout();
    content.appendChild(element);
};
  export {renderAbout};