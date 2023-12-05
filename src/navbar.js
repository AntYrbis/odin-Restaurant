import { content, createComponent } from './index';

function createNav() {
  const navItems = ["HOME", "MENU", "ABOUT"];
  const nav = createComponent("nav", null, null, null)

  navItems.forEach((item) =>
    nav.appendChild(createComponent("div", null, "nav-item", item))
  );

  return nav;
}

function renderNav(){
  const element = createNav();
  content.appendChild(element);
}

export {renderNav};