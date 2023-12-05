import content from './index';

function createPlate(title,description,price) {
    const element = document.createElement('div');
    element.classList.add("plate");

    const titleContent = document.createElement('div');
    titleContent.classList.add("title");
    titleContent.textContent = title;
    element.appendChild(titleContent);

    const descContent = document.createElement('div');
    descContent.classList.add("desc");
    descContent.textContent = description;
    element.appendChild(descContent);

    const priceContent = document.createElement('div');
    priceContent.classList.add("price");
    priceContent.textContent = price + " $";
    element.appendChild(priceContent);

    element.textContent = myName('Cody');

    return element;
};

function createMenu(){
    const element = document.createElement('div');

    const plate1 = createPlate("Tarte","it's a tarte","150");
    element.appendChild(plate1);
    
    return element;
};

function renderMenu(){
    element = createMenu();
    content.appendChild(element);
};

export {renderMenu};