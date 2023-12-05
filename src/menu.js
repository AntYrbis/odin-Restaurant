import { content, createComponent } from './index';

function createPlate(title,description,price) {
    const element = createComponent('div', null, 'plate', null);

    const titleContent = createComponent('div', null, 'title', title);
    element.appendChild(titleContent);

    const descContent = createComponent('div', null, 'desc', description);
    element.appendChild(descContent);

    const priceContent = createComponent('div', null, 'price', price + " $");
    element.appendChild(priceContent);

    const break_menu = createComponent("div", null, 'menu-break', null);
    element.appendChild(break_menu);

    return element;
};

function createMenu(){
    const element = createComponent("div", null, 'main', null);

    const menu = createComponent("div", null, 'menu-container', null);
    element.appendChild(menu);

    const plate1 = createPlate("Meal","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet","15");
    menu.appendChild(plate1);
    const plate2 = createPlate("Super Meal","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet","20");
    menu.appendChild(plate2);
    const plate3 = createPlate("Extra Meal","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet","30");
    menu.appendChild(plate3);
    
    return element;
};

function renderMenu(){
    const element = createMenu();
    content.appendChild(element);
};

export {renderMenu};