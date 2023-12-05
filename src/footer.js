import { content, createComponent } from './index';

function createFooter() {
  const element = createComponent("footer", null, null, null);
  const container = createComponent("div", null, "container-footer", null);

  const paragraphe = createComponent("p", null, null, null);
  container.appendChild(paragraphe);

  const string_copy = document.createTextNode("Copyright © ");
  const currentYear = document.createTextNode(new Date().getFullYear());
  const string_ant = document.createTextNode(" AntYrbis");
  paragraphe.appendChild(string_copy);
  paragraphe.appendChild(currentYear);
  paragraphe.appendChild(string_ant);

  element.appendChild(container);

  return element;
  };

function renderFooter(){
    const element = createFooter();
    content.appendChild(element);
}

  export {renderFooter};