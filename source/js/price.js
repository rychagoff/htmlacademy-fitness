const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('.tabs__button');
const tabPanels = tabs.querySelectorAll('.tabs__list');
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
  evt.currentTarget.classList.add('tabs__button--active');

  const tabPanel = tabPanelsArray.find((panel) => {
    if (panel.id === tabControl) {
      return true;
    }
  });
  tabPanel.classList.remove('tabs__list--hidden');
};

function onclickHandler(button) {
  button.addEventListener('click', showTab);
}

function removeActive(button) {
  button.setAttribute('aria-selected', false);
  button.classList.remove('tabs__button--active');
}

function hiddenPanel(panel) {
  panel.classList.add('tabs__list--hidden');
}

forEachHandler(onclickHandler, tabButtons);
