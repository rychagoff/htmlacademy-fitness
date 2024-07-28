import { onloadAccordion } from "./accordion";

const tabs = document.querySelector('.faq__tabs');
const tabButtons = tabs.querySelectorAll('.tabs__button');
const tabPanels = tabs.querySelectorAll('.tabs__panel');
const tabPanelsArray = Array.from(tabPanels);

const forEachHandler = (callback, items) => {
  items.forEach((item) => {
    callback(item);
  });
};

const showTab = (evt) => {
  const tabControl = evt.target.attributes['aria-controls'].value;
  forEachHandler(removeActive, tabButtons);
  forEachHandler(hiddenPanel, tabPanels);
  evt.currentTarget.setAttribute('aria-selected', true);
  evt.currentTarget.classList.add('tabs__button--background-active');

  const tabPanel = tabPanelsArray.find((panel) => {
    if (panel.id === tabControl) {
      return true;
    }
  });
  tabPanel.classList.remove('tabs__panel--hidden');

  onloadAccordion();
};

function onclickHandler(button) {
  button.addEventListener('click', showTab);
}

function removeActive(button) {
  button.setAttribute('aria-selected', false);
  button.classList.remove('tabs__button--background-active');
}

function hiddenPanel(panel) {
  panel.classList.add('tabs__panel--hidden');
}

forEachHandler(onclickHandler, tabButtons);
