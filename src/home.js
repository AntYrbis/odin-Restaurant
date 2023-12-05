import { content, createComponent } from './index';

function createHome(){
    const element = createComponent("div", null, 'main', null);

    const message = createComponent("div", null, 'main-text', 'Discovering new flavors !')
    element.appendChild(message);
    const content = createComponent("p", null, 'main-content', 'Enter a world of new taste. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac justo at velit efficitur ullamcorper. Sed in risus eu dolor luctus ultricies.');
    message.appendChild(content);

    const button = createComponent("button", null, null, "MENU");
    element.appendChild(button);

    return element;
};

function renderHome(){
    const element = createHome();
    content.appendChild(element);
};

  export {renderHome};